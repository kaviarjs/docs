---
id: package-loader
title: Loader
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<div className="view-api-container">
          <a href={useBaseUrl('static/api/loader/')} target="_blank" className="view-api">
            View API
          </a>
        </div>

This package is for loading your GraphQL API seamlessly from multiple places (folders, files, npm packages, etc) so you can have them merged when you start your server.

## Install

```
npm install --save @kaviar/loader
```

## Usage

```js
import { Loader } from "@kaviar/loader";

// Without Kaviar Bundles
const loader = new Loader();
// Or inside prepare() phase of your Bundle
const loader = container.get < Loader > Loader;

loader.load({
  // Can also be array of strings
  typeDefs: `
    type Query {
      sayHello: String
    }
  `,

  // Can also be array of resolvers
  resolvers: {
    Query: {
      sayHello: () => "Hello world!",
    },
  },

  // Can also be array of objects
  schemaDirectives: {
    name: MyDirective,
  },

  // Can be array of functions, we recommend to name your functions
  // So when it fails you can at least identify easily from where
  contextReducers: async function processNewVariables(context) {
    return {
      ...context,
      newVariable: "newValue",
    };
  },
});
```

## Getting it all together

This would happen when you want to instantiate your server

```js
const {
  typeDefs,
  resolvers,
  schemaDirectives,
  contextReducers,
} = loader.getSchema();
```

## Auto Loading

Given that you store your resolvers in: `resolvers.ts` or in `*.resolvers.ts`, and your types in `*.graphql.ts`, you are able to extract the loading module like this:

```typescript
// my-module/index.ts
import { extract } from "@kaviar/loader";

// This exports a GraphQL Module, directly laodable via loader.load()
export default extract(__dirname);
```

## Types

```typescript
// User.graphql.ts
export default /* GraphQL */ `
  type User {
    firstName: String!
    lastName: String!
    fullName: String!
  }
`;
```

```typescript
// User.resolvers.ts
export default {
  User: {
    fullName(user) {
      return user.firstName + " " + user.lastName;
    },
  },
};
```

You also have the ability to store both resolvers and types in the same file via: `*.graphql-module.ts` files:

```typescript
// subfolder
export default {
  typeDefs: /* GraphQL */ `
    type Query {
      saySomething: String
    }
  `,
  resolvers: {
    Query: {
      saySomething: () => "Hi!",
    },
  },
};
```
