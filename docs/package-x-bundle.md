---
id: package-x-bundle
title: Toolkit
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<div className="view-api-container">
          <a href={useBaseUrl('static/api/x-bundle/')} target="_blank" className="view-api">
            View API
          </a>
        </div>

The X-way is a set of tools that beautifully bridges the gap between your API Layer (GraphQL), your database (MongoDB), and your service layer. It is thought with fast-prototyping in mind but code scalability as well.

It has the following tools

- Apollo Server Executors (CRUD Operations, Security Checks, Service Delegation)
- Apollo Server Scalars (Date, ObjectId)
- A defined way for standard CRUD interfaces
- Validator Transformers (Date, ObjectId, UniqueDatabaseField)

The family of X-way bundles is currently composed of:

- X-Generator which uses Kaviar's Terminal Technology to develop applications fast.
- X-Password-Bundle which links Security, Mongo, Apollo to create a unified experience

## Folder Structure

This folder structure is thought through to support modern-web development with microservices in mind.

```yaml
- {projectRoot}
  - microservices
    - {microservice}
      - src
        - bundles
          - {YourBundle}
            - __tests__
            - collections
            - events
            - exceptions
            - fixtures
            - graphql
              - entities
                - {Entity}
                  - {Entity}.graphql.ts
                  - {Entity}.resolvers.ts
              - inputs
                - {Input}.graphql.ts
              - mutations/queries
                - {mutationName}
                  - {mutationName}.graphql.ts
                  - {mutationName}.resolvers.ts
              - index.ts
                - Loads resolvers and .graphql.ts files automatically
            - listeners
              - {Listener}.listener.ts
            - server-routes
              - {routeName}.route.ts
            - services
              - inputs
                - {Input}.input.ts
              - {Service}.service.ts
            - validators
              - {Validator}.validator.ts
            - constants.ts
            - defs.ts
            - {YourBundle}.ts
        - startup
          - index.ts
            - Initialises the kernel imported from `kernel.ts` after all bundles have been imported
          - env.ts
            - Reads environment variables and exports an interfaced module)
          - kernel.ts
            - Instantiates the kernel end exports it. Initialisation is done index.ts
          - bundles
            - {your}.ts
              - Adds the specified bundle to the kernel by importing the kernel and using kernel.addBundle()
      - package.json
      - README.md

  - package.json
  - README.md
```

## Executors

Just as a reminder the executors are functions that help us do re-usable stuff easier for GraphQL resolvers. Feel free to freshen up your memory by going to the [Executor Documentation](https://kaviarjs.com/docs/package-executor)

### Database

We use MongoDB Nova for fetching relational data. The Nova package has a way to transform a GraphQL request into a Nova request automatically fetching relations without any additional code:

```ts
import * as X from "@kaviar/x-bundle";

export default {
  Query: execute({
    doSomething: [X.ToNova(CollectionClass)],
  }),
};
```

If your query returns just one element, you can just use `X.ToNovaOne()` instead.

If you want to secure your Nova request to intersect based on some rules:

```ts
import { IAstToQueryOptions } from "@kaviar/nova";

[
  X.ToNova(CollectionClass, async (_, args, ctx, info) => {
    // Should return IAstToQueryOptions
    return {
      intersect: {
        fieldName: 1,
        relation1: {
          relationField: 1,
        },
      },
      // Enforce other rules like:
      maxLimit: 100,
      maxDepth: 5,
      // Use MongoDB filters and options for first level
      filters: {},
      options: {},
    };
  }),
];
```

Another useful one is usually to find an element by \_id, this is why we have:

```ts
// Assuming you pass _id as argument to the query:
[
  X.ToNovaOne(CollectionClass, (_, args) => ({
    _id: args._id,
  })),
];
```

Read more on these nice options on [Nova Documentation](https://kaviarjs.com/docs/package-nova)

Counting operations can be useful for paginated interfaces:

```ts
[
  X.ToCollectionCount(CollectionClass, (_, args) => ({
    // Here are filters returned, you can also read them from args if you prefer
    status: "approved",
  })),
];
```

If we want to ensure that a certain document exists before applying any change:

```ts
[
  // The second argument needs to return an _id
  // By default _id from args is taken like below
  X.CheckDocumentExists(CollectionClass, (_, args, ctx, info) => args._id),
];
```

Now let's work with some mutations:

```ts
`
type Query {
  insertSomething(post: PostNewInput): Post
  updateSomething(_id: ObjectId, dataSet: JSON): Post
  deleteSomething(_id: ObjectId): Boolean
}
`;

const insertSomething = [
  X.ToDocumentInsert(CollectionClass, "post"),
  // This one takes the returned _id from the above executor, and transforms it into a Nova query
  // So you can easily fetched the newly created document
  X.ToNovaByResultID(CollectionClass),
];

const updateSomething = [
  // Update accepts to arguments after collection: idResolver and mutationResolver which get `args` as their argument and return an _id and subsequently a "mutation" query
  // By default if you use the default one dataSet, it uses "$set" to update the provided data.
  X.ToDocumentUpdateByID(CollectionClass),
  X.ToNovaByResultID(CollectionClass),
];

const deleteSomething = [X.ToDocumentDeleteByID(CollectionClass, idResolver)];
```

### Logging

Whether you have mission critical queries/mutations in which you need logs for those actions or you simply want to debug the responses and requests much easier. You can use the following:

```ts
[
  // Requests should be added before your actual mutation
  X.LogRequest(),
  // Prints the arguments as JSON.stringified for full display
  X.LogRequestJSON(),

  // Logs the response and sends the result down the line
  X.LogResponse(),
  X.LogResponseJSON(),
  // You can put these logs at any stage in your pipeline
];
```

### Model & Validation

The arguments of GraphQL are objects, so it would be nice if we can easily transform them into models so we can "enhance" their functionality so-to-speak but more importantly to have them easily validatable. We will be using the [Kaviar's validator package](https://kaviarjs.com/docs/package-validator) We propose the following solution:

```ts
@Schema()
class User {
  @Is(a.string().required())
  firstName: string;
  @Is(a.string().required())
  lastName: string;
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
}

[
  // The second argument refers to the argument's name that you want to transform
  // You should use simply "input" most of the times and these
  X.ToModel(User, "input"),
  X.Validate({ field: "input" })
  async (_, args, ctx) => {
    const user = args.input;
    // user instanceof User
    // user is validated, otherwies it would have thrown an exception
  }
];
```

### Security

We should be able to quickly check if a user is logged in or has certain permissions:

```ts
[
  X.CheckLoggedIn(),
  X.CheckPermission("ADMIN"),
  // or multiple roles
  X.CheckPermission(["USER", "SUPER_USER"])
  // or custom so you can customise domain and others
  X.CheckPermission((_, args, ctx) => {
    // Returns a permission filter
    return {
      userId: ctx.userId,
      domain: "Projets",
    }
  })
]

// The permission search looks like this.
interface IPermissionSearchFilter {
    userId?: any | any[];
    permission?: string | string[];
    domain?: string | string[];
    domainIdentifier?: string | string[];
}
```

### Services

As we know, our logic should rely in the service layer instead of the resolvers, this is why we recommend for custom logic that cannot be satisfied through some useful executors, to delegate to your service

```ts
[
  X.ToService(ServiceClass, "method")
  // By default it transmits to "method" args.input and userId

  // However you can create your own mapper that returns an array of arguments
  // That will be applied properly
  X.ToService(ServiceClass, "extended", (_, args, ctx) => ([
    args, ctx
  ]))
]

class ServiceClass {
  async method(input, userId) {
    // Code goes here
  }

  async extended(allArguments, fullContext) {
    // Code goes here
  }
}
```

## Scalars

The only scalar we provide in this package is:

- ObjectId

What it does is pretty simple, it converts to ObjectId the strings it receives from GraphQL so it's easy for you to do searching and other cool stuff without worrying about it.

## Validators

### DateTransformer

If you plan on receiving the date in a string format such as "YYYY-MM-DD", then it would be helpful to have it ready as a Date when you want to use it:

```ts
class Post {
  // More about formats here: https://date-fns.org/v2.14.0/docs/format
  @Is(a.date().format("YYYY-MM-DD"))
  publishedAt: Date;
}
```

Now if you send it as a string, after it passes validation it will be a Date object.

### ObjectId

Your GraphQL scalar should take care of this already, but it's also good if we could re-use this logic in validation:

```ts
class Post {
  @Is(a.objectId())
  ownerId: any;
}
```

### Unique Database Field

If we want to easily prevent users from signing up with the same "phone number" let's say:

```ts
class User {
  @Is(
    a.string().required().uniqueField({
      collection: CollectionClass,
      field: "phoneNumber",
    })
  )
  phoneNumber: string;
  // Because we're in MongoDB's realm you can also use '.' for your fields for nested value
}
```

## CRUD Interfaces

If we want to go fast, we sometimes need to be "less specific" and go around some of GraphQL principles. Meaning that for filters we can work with a `JSON` and for `dataSet` on update

```graphql
input QueryInput {
  filters: JSON
  options: QueryOptionsInput
}

input QueryOptionsInput {
  sort: JSON
  limit: Int
  skip: Int
}

input DocumentUpdateInput {
  _id: ObjectId!
  dataSet: JSON!
}

input DocumentDeleteInput {
  _id: ObjectId!
}
```

This means that you can easily do a CRUD like:

```ts
export default /* GraphQL */ `
  type Query {
    adminPostsFindOne(query: QueryInput): Post
    adminPostsFind(query: QueryInput): [Post]!
    adminPostsCount(filters: JSON): Int!
  }

  type Mutation {
    adminPostsInsertOne(document: JSON!): Post
    adminPostsUpdateOne(_id: ObjectId!, dataSet: JSON!): Post!
    adminPostsDeleteOne(_id: ObjectId!): Boolean
  }
`;
```

Below you have a complete CRUD that later you can easily adapt to have type-safety at GraphQL level. This is very useful when you are generating lots of them.

```ts
import { group } from "@kaviar/executor";
import * as X from "@kaviar/x-bundle";

export default {
  Query: group([], {
    adminPostsFindOne: [X.ToNovaOne(PostsCollection)],
    adminPostsFind: [X.ToNova(PostsCollection)],
    adminPostsCount: [X.ToCollectionCount(PostsCollection)],
  }),
  Mutation: group([], {
    adminPostsInsertOne: [
      X.ToDocumentInsert(PostsCollection),
      X.ToNovaByID(PostsCollection),
    ],
    adminPostsUpdateOne: [
      X.CheckDocumentExists(PostsCollection),
      X.ToDocumentUpdateByID(PostsCollection),
      X.ToNovaByID(PostsCollection),
    ],
    adminPostsDeleteOne: [
      X.CheckDocumentExists(PostsCollection),
      X.ToDocumentDeleteByID(PostsCollection),
      X.ToNovaByID(PostsCollection),
    ],
  }),
};
```

We offer a set of tools to build a powerful layer between Apollo and your Service layer. The magic and the true quality of your software product will rely in the service layer, let X-way do the rest.

```
___   ___      ____    __    ____  ___   ____    ____
\  \ /  /      \   \  /  \  /   / /   \  \   \  /   /
 \  V  /   _____\   \/    \/   / /  ^  \  \   \/   /
  >   <   |______\            / /  /_\  \  \_    _/
 /  .  \          \    /\    / /  _____  \   |  |
/__/ \__\          \__/  \__/ /__/     \__\  |__|
```
