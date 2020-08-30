module.exports = {
  title: "KaviarJS",
  tagline: "For the classy and the bold.",
  url: "https://kaviarjs.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "KAVIARJS", // Usually your repo name.
  onBrokenLinks: "warn",
  themeConfig: {
    colorMode: {
      disableSwitch: true,
    },
    googleAnalytics: {
      trackingID: "UA-40568040-12",
    },
    algolia: {
      apiKey: "42e5ce65aa65f5bbc8fb34a45aab2a52",
      indexName: "kaviarjs",
      searchParameters: {}, // Optional (if provided by Algolia)
    },
    navbar: {
      title: "",
      logo: {
        alt: "KaviarJs",
        src: "img/logo.png",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          href: "https://www.reddit.com/r/KaviarJS",
          label: "Reddit",
          position: "right",
        },
        {
          href: "https://github.com/kaviarjs/docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Introduction",
              to: "docs/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/kaviarjs",
            },
            {
              label: "Reddit",
              href: "https://reddit.com/r/KaviarJS",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/kaviarjs/docs",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Theodor Diaconu.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        theme: {
          disableSwitch: true,
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
