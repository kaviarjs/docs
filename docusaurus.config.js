module.exports = {
  title: "KaviarJS",
  tagline: "fast like a prototype — scalable like enterprise",
  url: "https://www.kaviarjs.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "KAVIARJS", // Usually your repo name.
  onBrokenLinks: "warn",
  plugins: ["docusaurus-plugin-sass"],
  themeConfig: {
    colorMode: {
      disableSwitch: true,
    },
    googleAnalytics: {
      trackingID: "UA-40568040-12",
    },
    algolia: {
      apiKey: "fc3ffd92e766ee16a3af53c0862f1e91",
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
          to: "excel2app/",
          activeBasePath: "excel2app",
          label: "Excel 2 App",
          position: "left",
        },
        // {
        //   href: "https://www.reddit.com/r/KaviarJS",
        //   label: "Reddit",
        //   position: "right",
        // },
        {
          href: "https://github.com/kaviarjs/kaviar",
          label: "GitHub",
          position: "right",
        },
        {
          href: "https://forms.gle/DTMg5Urgqey9QqLFA",
          label: "Give us feedback",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Introduction",
              to: "docs/",
            },
            {
              label: "X-Framework",
              to: "docs/x-framework-introduction",
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
            {
              label: "Newsletter",
              href: "http://eepurl.com/hcoxCj",
            },
            {
              label: "Feedback",
              href: "https://forms.gle/DTMg5Urgqey9QqLFA",
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
          editUrl: "https://github.com/kaviarjs/docs/edit/master",
        },
        theme: {
          disableSwitch: true,
          customCss: require.resolve("./src/css/main.scss"),
        },
      },
    ],
  ],
};
