export interface IElement {
  id: string;
  title: string;
  package?: string;
  typeDocs?: boolean;
}

export interface IElementGroup {
  groupLabel: string;
  elements: IElement[];
}

export function isElementGroup(arg: any): arg is IElementGroup {
  return typeof arg.groupLabel === "string";
}
export function isElementSingle(arg: any): arg is IElement {
  return arg.groupLabel === undefined;
}

export interface IElementMap {
  [key: string]: Array<IElementGroup | IElement>;
}

export const map: IElementMap = {
  Introduction: [
    {
      id: "framework-introduction",
      title: "Introduction",
    },
  ],
  Framework: [
    {
      id: "core",
      title: "Core",
      package: "core",
      typeDocs: true,
    },
    {
      groupLabel: "Database",
      elements: [
        {
          id: "mongo",
          title: "MongoDB",
          package: "mongo-bundle",
          typeDocs: true,
        },
        {
          id: "nova",
          title: "Nova",
          package: "nova",
          typeDocs: true,
        },
      ],
    },
    {
      id: "logger",
      title: "Logger",
      package: "logger-bundle",
      typeDocs: true,
    },
    {
      groupLabel: "Security",
      elements: [
        {
          id: "security",
          title: "Security",
          package: "security-bundle",
          typeDocs: true,
        },
        {
          id: "security-mongo",
          title: "Security with MongoDB",
          package: "security-mongo-bundle",
          typeDocs: true,
        },
        {
          id: "password-bundle",
          title: "Password Strategy",
          package: "password-bundle",
          typeDocs: true,
        },
      ],
    },
    {
      groupLabel: "GraphQL",
      elements: [
        {
          id: "loader",
          title: "Loader",
          package: "loader",
          typeDocs: true,
        },
        {
          id: "executor",
          title: "Executor",
          package: "executor",
          typeDocs: true,
        },
        {
          id: "apollo",
          title: "Apollo",
          package: "apollo-bundle",
          typeDocs: true,
        },
        {
          id: "apollo-security",
          title: "Apollo Security",
          package: "apollo-security-bundle",
          typeDocs: true,
        },
      ],
    },
    {
      id: "emails",
      title: "Emails",
      package: "email-bundle",
      typeDocs: true,
    },
    {
      id: "terminal",
      title: "Terminal",
      package: "terminal-bundle",
      typeDocs: true,
    },
    {
      id: "validator",
      title: "Validator",
      package: "validator",
      typeDocs: true,
    },
  ],
  "X-way": [
    {
      id: "x-way-introduction",
      title: "Introduction",
    },
    {
      id: "x-bundle",
      title: "X-Bundle",
      package: "x-bundle",
      typeDocs: true,
    },
    {
      id: "x-password-bundle",
      title: "Passwords",
      package: "x-password-bundle",
      typeDocs: true,
    },
    {
      id: "x-generator-bundle",
      title: "Command-line",
      package: "x-generator-bundle",
      typeDocs: true,
    },
  ],
};
