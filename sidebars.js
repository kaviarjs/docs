module.exports = {
  someSidebar: {
    Introduction: ["framework-introduction", "framework-roadmap"],
    Foundation: [
      "package-core",
      {
        type: "category",
        label: "Database",
        items: ["package-mongo", "package-nova"],
      },
      "package-logger",
      {
        type: "category",
        label: "Security",
        items: [
          "package-security",
          "package-security-mongo",
          "package-password-bundle",
        ],
      },
      {
        type: "category",
        label: "GraphQL",
        items: ["package-graphql", "package-apollo", "package-apollo-security"],
      },
      "package-emails",
      "package-terminal",
      "package-validator-bundle",
    ],
    "X-Framework": [
      "x-framework-introduction",
      "x-framework-conventions",
      "package-x-bundle",
      "package-x-ui",
      "package-x-generator-bundle",
      "package-x-password-bundle",
    ],
  },
};
