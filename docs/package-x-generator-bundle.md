---
id: package-x-generator-bundle
title: X Generator
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<div className="view-api-container">
          <a href={useBaseUrl('static/api/x-generator-bundle/')} target="_blank" className="view-api">
            View API
          </a>
        </div>

# X Terminal Bundle

This contains the "x" command which is going to help you immensely in generating the folder structure and files needed to use the "X" way of Kaviar.

This bundle is done when:

TODO:

- A way to select which permissions to choose

- Blueprint

# x:project

- microservices
- README.md

# x:microservice

- name
- type: backend|frontend

# x:security-bundle

# x:new:bundle

- type: local/x/remote
- name
- graphql api?
- collections?

# x:remote:bundle

- name incl. searching (kaviar-bundle tag GitHub)

# x:collection

- name
- model?
  - name
  - fields entry
- behaviors (multi-select: timestampable, blameable, soft-deletable
- entity?

# x:graphql:entity

- name
- contains resolvers?
- contains model?

# x:graphql:input

- name
- contains validation
- fields: [
  name, type
  ]

# x:graphql:query

- name
- input
- create a input?
- return type: single/array
- return entity: autocomplete entity, allow custom
- Security: Logged In?
- If Yes: Permissions? (read permissions)
- Return with Nova?
- Return with Service?

# x:graphql:mutation

- name
- input
- create a input?
- return type single/array
- return entity
- Security
- Permissions
- Service?
  Create a service "Name", "Method", "link with input"

# x:service

- name
- needs container?
- needs entity manager?
- needs security service?
- needs permissioning service?
- methods comma separated?

# x:listener

- name
- multiple choose events to listen on? (optional)
- find a way to warm them up!

# x:event, x:exception

- name
- message
- type: any/custom
- [field, type]

# x:crud

- collection
- entity
- services
- security

# x:flow

- entity
- collection
- stateName
- actionVerb: "set"
- states
- dispatches events

# x:blueprint

x blueprint > autocomplete?

## Folder Structure

```bash
.env
# rest in src
README.md
microservice/{m}
  __tests__
    index.ts
  kaviar.json: {
    "name": "app",
    "type": "backend",
    "srcDir": "./src",
    "distDir": "./dist",
  }
  startup/
    - kernel.ts  // exports default kernel
    - index.ts // imports all bundles and initialises kernel at the end
    - bundles
      - index.ts
      - bundle1.ts // kernel.addBundle(new Bundle());
      - bundle2.ts
  bundles/
    {bundle}/
      __tests__
        index.ts
        services/
          ...etc...
      graphql
        entities/
          User/
            User.graphql
            // loads types and resolvers
            User.resolvers.ts
        inputs/
          UserCreateInput.graphql
        queries/
          index.graphql
          getUsers.resolvers.ts
        mutations/
          index.graphql
          createUser.resolvers.ts
        index.ts # Loads all .graphql and resolvers via extract()
      inputs/
        UserCreateInput.ts
      services/
        MyService.ts
        index.ts
      listeners/
        UserListener.ts
        index.ts
      events/
        index.ts
        <!-- UserAddedEvent.ts -->
      exceptions/
        <!-- UserNotFoundException.ts -->
        index.ts
      commands/
      collections/
        Users
          // Users.collection.ts
          // Users.links.ts
          // Users.reducers.ts
          // User.model.ts
      index.ts
        - bundle warmsup listeners
        - loads via graphql index.ts
        -
```
