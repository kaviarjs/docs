---
id: framework-introduction
title: Welcome
---

## What is Kaviar ?

Kaviar is a TypeScript-based framework which aims at helping developers create robust web applications <strong>in a speedy fashion</strong>, with modules that are <strong>reusable</strong> across other apps. In order to do this we had to address the status-quo and we had to innovate and change the old way of how the things were done.

There are two parts of the story. (1) Kaviar Framework which consists of the building blocks of architecting your application, the other part, (2) which will be refered to as <strong>X-way</strong>, containing opinionated implementations of the Kaviar Framework to solve application development in a speedy fashion.

We strongly recommend that you read the main principles and sections of the framework before diving into the opinionated territory.

## Solutions

The most notable solutions that Kaviar Framework comes with, are:

1. Module Orchestration. Run your application composed of several modules that can talk with each other and modify their behavior.
2. Security. How do we implement a security standard that doesn't care about the database you use and allows other modules to use it?
3. GraphQL tooling: modules for easily integrating GraphQL API with your business logic.

## Roadmap

- Kaviar aims at conquering the frontend especially for generating Admin interfaces that match well with its CRUD Generators
- The Admin generator should be easily extendable by other modules and allow "hackability"
- Ability to generate a blueprint from a web-interface and based on it, scaffold an entire project using the custom generator (instead of constantly asking cli-commands)
