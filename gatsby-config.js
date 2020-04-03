require('dotenv').config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `Gatsby Regulations`,
    description: `A Gatsby generated interactive regulations interface.`,
    author: `@cfpb`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `interactive-regulations`,
        short_name: `regulations`,
        start_url: `/`,
        background_color: `#20aa3f`,
        theme_color: `#20aa3f`,
        display: `minimal-ui`,
        icon: `src/images/regs-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    // API setup
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: 'Regulations',
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: 'regulations',
        // Url to query from
        url: process.env.API_URI,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    //`gatsby-plugin-offline`,
  ],
};
