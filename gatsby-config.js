const config = require("./config")
module.exports = {
  siteMetadata: {
    siteTitle: `The <span>Neil Gaiman </span>Collection`,
    title: `The Neil Gaiman Collection`,
    description: `<p>Calling all Neil Gaiman readers!</p>
    <p>Next year, William Morrow will publish the ultimate collection of fiction by Neil Gaiman – a must-have for fans and new readers alike. And we’d like you to help us – and Neil – choose the stories that will be included.</p>
    <p>Please vote for your TOP THREE FAVORITE Neil Gaiman stories from the selection below. And, if you have a moment, please share with us what it is about your #1 Neil Gaiman story that makes it your top choice.</p>
    <p>Cast your votes no later than October 31, 2019 – the winning stories will be announced on April 27, 2020.</p>
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
  ],
}
