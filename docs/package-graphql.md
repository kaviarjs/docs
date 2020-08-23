---
id: package-graphql
title: GraphQL
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<a href={useBaseUrl('static/api/apollo-bundle/')} target="_blank">View API</a>

<h1 align="center">KAVIAR APOLLO BUNDLE</h1>

<p align="center">
  <a href="https://travis-ci.org/kaviarjs/apollo-bundle">
    <img src="https://api.travis-ci.org/kaviarjs/apollo-bundle.svg?branch=master" />
  </a>
  <a href="https://coveralls.io/github/kaviarjs/apollo-bundle?branch=master">
    <img src="https://coveralls.io/repos/github/kaviarjs/apollo-bundle/badge.svg?branch=master" />
  </a>
</p>

<br />
<br />

ApolloBundle quickly bootstraps an Apollo Server within Kaviar's framework. It injects the `container` inside the context.

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

## Listen to Exceptions

## Server-Side Routes
