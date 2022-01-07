module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "restaurant landing page ",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "GAC1Z5h6uNLgstyjdJptyB0j15L-wzUXdznvAebap3g",
        spaceId: "hi3b2mc578jm",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
