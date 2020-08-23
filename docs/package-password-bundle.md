---
id: package-password-bundle
title: Password Strategy
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<div className="view-api-container">
          <a href={useBaseUrl('static/api/password-bundle/')} target="_blank" className="view-api">
            View API
          </a>
        </div>

Passwords is an authentication method implemented for the `SecurityBundle`. It does not expose any routes/infrastructure end points and it doesn't care about your persistance layer.

```typescript
import { PasswordBundle } from "@kaviar/password-bundle";

new PasswordBundle({
  // All of these are optional, these are the defaults
  failedAuthenticationAttempts: {
    lockAfter: 10,
    cooldown: "10m", // After how much time of invalid passwords you can try again to login
  },
  resetPassword: {
    cooldown: "5m", // After how much time you can request ANOTHER password reset request
    expiresAfter: "2h", // How much time do we allow for the token to exist
  },
});
```

It all starts with a user:

```typescript
import { SecurityService } from "@kaviar/security-bundle";
import { PasswordService } from "@kaviar/password-bundle";

const securityService = container.get(SecurityService);
const passwordService = container.get(PasswordService);

const userId = await this.securityService.createUser();

// Now that we have the user we attach options to it
await this.passwordService.attach(userId, {
  username: "USERNAME",
  password: "PASSWORD",
});
```

Finding a userId by username:

```typescript
const userId = await this.passwordService.findUserIdByUsername("username");
```

Checking is password is valid:

```typescript
const isValid = await passwordService.isPasswordValid(userId, "PASSWORD");
```

Note that password validation will also register invalid attempts, and depending on how you have configured the bundle it can temporary suspend the user.

If you want to bypass this functionality you can pass as the 3rd argument:

```typescript
passwordService.isPasswordValid(userId, "PASSWORD", {
  failedAuthenticationAttemptsProcessing: false;
})
```

## Forgot Password

```typescript
const token = await passwordService.createTokenForPasswordReset(userId);

const isTokenValid = await passwordService.isResetPasswordTokenValid(
  userId,
  token
);

await this.passwordService.resetPassword(userId, token, "NEW_PASSWORD");
```

## Set Password

```typescript
await this.passwordService.setPassword(userId, "NEW_PASSWORD");
```
