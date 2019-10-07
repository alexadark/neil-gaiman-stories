const config = require("./config")
module.exports = {
  siteMetadata: {
    siteTitle: `A <span>Neil Gaiman </span>Reader: Fiction`,
    title: `The Neil Gaiman Reader: Fiction`,
    description: `
        <p>Calling all Neil Gaiman fans...</p>

        <p>Next year, William Morrow will publish the ultimate collection of Neil Gaiman stories—a must-have for longtime fans and new readers alike. Your vote will help Neil choose the stories to include.</p>

        <p>Vote for your top three favorite stories by clicking on them below. If you have a moment, please share with us why you love your #1 choice.</p>

        <p>Cast your votes no later than October 31st, 2019. The winning stories will be announced on or before April 27th, 2020.</p>
        `,
    author: `Alexandra Spalato`,
  },
  plugins: [
    `gatsby-plugin-theme-ui`,
    // `gatsby-theme-style-guide`,
    {
      resolve: `gatsby-source-graphql`,
      options: {
        // This type will contain remote schema Query type
        typeName: `WPGraphQL`,
        // This is field under which it's accessible
        fieldName: `wpgraphql`,
        // Url to query from
        url: `${config.wordPressUrl}/graphql`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-TJKPL83",

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
  ],
}
