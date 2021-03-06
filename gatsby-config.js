module.exports = {
  siteMetadata: {
    title: `Julio Soto`,
    description: `My portfolio | Julio Soto`,
    author: `Julio Soto Berlanga`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-use-dark-mode`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-141503879-1",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#364f6b`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: "gatsby-plugin-web-font-loader",
    //   options: {
    //     typekit: {
    //       id: "mhc1esb",
    //       api: "//use.typekit.net",
    //     },
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
