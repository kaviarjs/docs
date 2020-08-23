---
id: package-apollo
title: Apollo
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<div className="view-api-container">
          <a href={useBaseUrl('static/api/apollo-bundle/')} target="_blank" className="view-api">
            View API
          </a>
        </div>

ApolloBundle quickly bootstraps an Apollo Server within Kaviar's framework. It injects the `container` inside the context and allows you to easily create server-side routes.

## Resources

We advise you to read more about the following concepts:

- [@kaviar/core](https://github.com/kaviarjs/core)
- [@kaviar/loader](https://github.com/kaviarjs/loader)

## Usage

```typescript
import { ApolloBundle } from "@kaviar/apollo-bundle";

kernel.addBundle(
  new ApolloBundle({
    // (optional) Apollo additional configuration
    apollo: ApolloServerExpressConfig,

    // (optional) Whether to install websocket handlers
    enableSubscriptions: false,

    // (optional) Express middlewares:
    middlewares: [],

    // (optional) Server Side Routes
    routes: [
      {
        type: "post",
        path: "/api/payment-handler/:orderId",
        handler: async (req, res, container) => {},
        // These are optional and used for body-parsing
        json: true,
        urlencoded: true,
      },
    ],
  })
);
```

## Loading API Definitions

```typescript
import { Bundle } from "@kaviar/core";
import { Loader } from "@kaviar/apollo-bundle";

class CoreBundle extends Bundle {
  // You must do your loading at the initialisation phase, not before
  init() {
    const loader = this.get<Loader>(Loader);

    loader.load({
      typeDefs: `
        type Query {
          sayHello: String
        }
      `,
      resolvers: {
        Query: {
          sayHello: (_, args, ctx) => {
            // You have access to the kernel container via: ctx.container
            return "Hello world!";
          },
        },
      },
      contextReducers: async function storeUser(ctx) {
        // Note that if you have subscriptions enabled
        // You'll have to read from connectionParams rather than req.
        return {
          ...ctx,
          userId: "XXX",
        };
      },
    });
  }
}
```

## Scalars

This package automatically includes the `JSON` and `Date` scalars. The date scalar works with actual timestamp.

## Listen to Exceptions

There is an event that throws when an unresolved exception reaches the resolver function. That event is called `ApolloResolverExceptionEvent` and you can easily hook into it and do something when some resolver errors out, like logging, or sending a warning and so on.
