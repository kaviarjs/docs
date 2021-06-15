---
id: package-x-s3-uploads
title: Uploads
---

import { PackageHeader } from "@site/src/components/PackageHeader";

<PackageHeader version="1.0.0" packageName="x-s3-bundle"  />

S3Upload bundle allows you to easily upload files to Amazon S3 by helping you upload files, storing metadata about the files in a separate collection `AppFiles` and providing resolvers to download the urls.

We are using [Apollo Upload scalar](https://www.apollographql.com/docs/apollo-server/data/file-uploads/) to transfer the files through the GraphQL API.

## Setup

```bash
npm i -S graphql-upload aws-sdk @kaviar/x-s3-bundle
```

```ts
import { XS3Bundle } from "@kaviar/x-s3-bundle";

kernel.addBundle(
  new XS3Bundle({
    accessKeyId: "xxx",
    secretAccessKey: "xxx",
    bucket: "xxx",
    region: "eu-west-2",
    // used to generate the download path
    endpoint: "https://s3/",
  })
);
```

Or if you have them already in your `.env` files, no need to be specified in bundle configuration when adding it to kernel:

```ts
accessKeyId: process.env.AWS_S3_KEY_ID,
secretAccessKey: process.env.AWS_S3_SECRET,
endpoint: process.env.AWS_S3_ENDPOINT,
region: process.env.AWS_S3_REGION,
bucket: process.env.AWS_S3_BUCKET,
```

### Uploading in Resolvers

```ts
import { S3UploadService, AppFilesCollection } from "@kaviar/x-s3-bundle";

const types = `
  type Mutation {
    upload(file: Upload): Boolean
  }
`;

const resolver = async function (_, args, ctx) {
  // The file is the GQL Upload Scalar
  const { file } = args;

  const s3UploadService = ctx.container.get(S3UploadService);
  const appFile = await s3UploadService.upload(file, {
    resourceType: "avatar",
    uploadedById: ctx.userId,
  });

  // At this step appFile has been already uploaded to S3. You can fetch the download url:
  const url = s3UploadService.getUrl(appFile.path);

  // Or via Nova as we have the `downloadUrl` reducer to help you in this regard
  const appFiles = ctx.container.get(AppFilesCollection);
  const appFile = appFiles.queryOne({
    $: {
      filters: { _id: appFile.id },
    },
    name: 1,
    downloadUrl: 1,
  });
};
```

## How it works

Basically you'll have a bunch of entities linked with files through `Nova` linking with `AppFilesCollection`. For example, an User has an avatar:

In GraphQL typing it will look something like this:

```ts
type User {
  avatar: AppFile
}
```

```graphql
query me {
  avatar {
    """
    Keep in mind that you should do a Nova query in your resolver if you want this to work as downloadUrl is a reducer.
    """
    downloadUrl
  }
}
```

When adding the avatar, after uploading it can look something like this:

```ts
import { AppFilesCollection } from "@kaviar/x-s3-bundle";

// Sample of linking of files
class UsersCollection extends Collection {
  static links = {
    avatar: {
      collection: () => AppFilesCollection,
      field: "avatarId",
    },
  };
}
```

```ts
function uploadAvatarResolver(_, args, ctx) {
  const s3UploadService = ctx.container.get(S3UploadService);
  const appFile = await s3UploadService.upload(args.file, {
    resourceType: "avatar",
    uploadedById: ctx.userId,
  });

  const usersCollection = ctx.container.get(UsersCollection);
  usersCollection.updateOne(
    { _id: ctx.userId },
    {
      $set: {
        avatarId: appFile._id,
      },
    }
  );
}
```

If for example you have a "place" where you upload more files. For example, a `Comment` can contain many pictures. The solution we recommend is creating a conglomerate called `FileGroup` which stores and manages these, and link that fileGroup with the entities you're interested in.

### Removal

Files get deleted when `appFiles` get deleted by `_id`. This is done because of security and performance concerns.

```ts
appFilesCollection.deleteOne({ _id: appFileId });
```

This will automatically delete it from the S3 as well. This is handled in `AppFileListener` via a `BeforeRemoveEvent` for the documents.

### Customisation

You can create your own S3UploadService if you have special handling for things such as image compression or others:

```ts
class ImageS3UploadService extends S3UploadService {
  upload(upload: Promise<Upload>, extension?: Partial<AppFile>) {
    // Do your own thing
  }
}
```

For thumbnails of images we recommend that you store these files separately in their own `AppFile` and manage them separately.
