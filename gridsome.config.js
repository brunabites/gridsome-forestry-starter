// This is where project configuration and installed plugin options are located.
// Learn more: https://gridsome.org/docs/config

module.exports = {
  siteName: "Bruna Bites",
  siteUrl: `https://www.brunabites.com`,
  host: "0.0.0.0",
  titleTemplate: "%s | Bruna Bites - UX/UI",
  siteDescription: "Product Designer UX/UI",
  plugins: [
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-2806426-5",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "projects/**/*.md",
        typeName: "ProjectPost",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "journal/**/*.md",
        typeName: "JournalPost",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        },
      },
    },
  ],
  transformers: {
    remark: {
      plugins: [
        "@gridsome/remark-prismjs",
        "gridsome-remark-unwrap-images"
      ]
    },
  },
}