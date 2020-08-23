---
id: framework-introduction
title: Welcome
---

## Next-gen application-framework

Hi there, internet wonderer! We are extremely happy that you arrived at this page, as this marks a stepping stone into your evolution as a web developer.

We want, in this chapter, to give you a glimpse about what Kaviar is, how it came to be, what kind of cool things it can do and what is the roadmap, where we're heading.

## What is Kaviar ?

Kaviar is a MIT-licensed, TypeScript-based framework which aims at helping developers create robust web applications <strong>in a speedy fashion</strong>, with modules that are <strong>reusable</strong> across other apps. In order to do this we had to address the status-quo and we had to innovate and change the old way of how the things were done.

Kaviar makes heavy use of:

- TypeScript types, ofcourse
- Asynchronous Event Management
- Dependency Injection

## How it came to be ?

Here is what Theodor Diaconu, the lead developer of Kaviar has to say:

"My vision is that web developers should spend time on doing nice things, in my career I have re-invented the wheel many times when it comes to things that could be easily be done by a generator. I want web-developers to spend as close to zero time as possible when creating basic stuff such as: Authentication, CRUDs, Email Sending, Notifications, Uploads, Deployment, and spend more time on designing the data model, writing tests for their services and so on. I have explored the waters and everything I found in 2020 as a TypeScript JS Framework was disappointing to say the least, they got some things ok, but some things were awful, so I said to myself, if not me, then who? if not now then when? and I decided to start pursuing the dream of Kaviar and solve the problems I was facing."
."

## What we solve

We solve through Kaviar, the following:

1. Orchestrating Modules. How do we write code in such a way that multiple modules can talk (extend, modify behavior) with each other in an intuitive, non-magical manner?
2. Asynchronous Event Management. In 2020, the birth-year of Kaviar, there seemed to be no library out there that allowed us to have EventListeners that are async or emitions that can be `awaited`.
3. Security module which is database agnostic and has strong permissioning model.
4. Modules that allow easily playing with: Emails, Authentication Strategies, GraphQL Utilities, Validation Tools, Logging, Database, etc
5. Scaffolding tool that allows you to generate all sorts of cool stuff directly from your command line and have everything automatically imported.

Luckily, with enough dedication, the Kaviar team managed to succeed in this regard. And all modules have been implemented in their stable `1.0.0` release.

## Roadmap

- Kaviar aims at conquering the frontend especially for generating Admin interfaces that match well with its CRUD Generators
- The Admin generator should be easily extendable by other modules and allow "hackability"
- Ability to generate a blueprint from a web-interface and based on it, scaffold an entire project using the custom generator (instead of constantly asking cli-commands)
