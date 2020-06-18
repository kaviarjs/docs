# Define Structure

- Introduction
  - What it solves
    - Prototyping
    - Evolution
  - How it came to be
  - What's next?
    - Uploads
    - UI Tooling via React
    - Live Data
- Core
- Database
  - Mongo Bundle
  - Nova
- Security
  - Security Mongo Bundle
- GraphQL
  - Apollo Bundle
    - Server Side Routes
    - Serverless?
  - Loader
  - Executor
  - Apollo Security
- Validation
- Emails
  - Email Bundle
  - MJML
- Logging
- Terminal
- X
  - Folder Structure
  - Authentication
  - Generator

# Packages

The documentation is built based on the packages that are defined and a script copies their documentation and builds the sidebar.

The concept is that your package has a DOCUMENTATION.md that describes what the package does and provides a link to the official documentation website: kaviarjs.com/docs/{package}. If it contains links to documentation outside the package, it will point to kaviarjs.com.

Later on, packages should be able to be versioned, by automatically detecting the tags, and creating different versions of them.
