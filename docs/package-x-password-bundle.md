---
id: package-x-password-bundle
title: X Passwords
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<div className="view-api-container">
          <a href={useBaseUrl('static/api/x-password-bundle/')} target="_blank" className="view-api">
            View API
          </a>
        </div>

The **X-Way** of handling passwords by giving you the following utility belt:

- Creates Apollo endpoints to manipulate the standard process of registration, password change, password reset, email verification
- Has by default emails for welcoming, verifying your email, resetting password

:::note
The content and title _can_ include markdown.
:::

```typescript
import { XPasswordBundle } from "@kaviar/x-password-bundle";

// For this to work you need the following: SecurityBundle, ApolloBundle, ApolloSecurityBundle, SecurityMongoBundle, XBundle

kernel.addBundle(new PasswordBundle());

// The configuration is:
export interface IXPasswordBundleConfig {
  services: {
    XPasswordService: Constructor<IXPasswordService>;
  };
  // Make sure you have the correct APP_URL kernel parameter set.
  // This allows you to modify the email templates.
  emails: {
    templates: {
      welcome: IReactEmailTemplate<IWelcomeEmailProps>;
      forgotPassword: IReactEmailTemplate<IForgotPasswordEmailProps>;
      resetPasswordConfirmation: IReactEmailTemplate<
        IResetPasswordConfirmationEmailProps
      >;
      verifyEmail: IReactEmailTemplate<IVerifyEmailProps>;
    };
    paths: {
      welcomePath: string;
      resetPasswordPath: string;
      verifyEmailPath: string;
    };
    applicationName: string;
    regardsName: string;
    sendEmailVerification: boolean;
    sendWelcomeEmail: boolean;
  };
  // The user will not be able to be authenticated if this is false
  requiresEmailVerificationBeforeLoggingIn: boolean;
  /**
   * Enable or disable certain mutations of GraphQL
   */
  graphql: {
    mutations: {
      register: boolean;
      changePassword: boolean;
      login: boolean;
      logout: boolean;
      resetPassword: boolean;
      forgotPassword: boolean;
      verifyEmail: boolean;
    };
  };
}
```

## Modify Behavior

You can modify behavior of your mutation resolvers by creating your own `XPasswordService`:

```ts
import { RegistrationInput, XPasswordService } from "@kaviar/x-password-bundle";

class MyXPasswordService extends XPasswordService {
  register(input: RegistrationInput) {
    // Do your thingie
  }
}

// ...
new XPasswordBundle({
  services: {
    XPasswordService: MyXPasswordService,
  },
});
```

Or, you can specify `grapher.mutations.register` as `false` and implement your own mutation in your Bundle.
