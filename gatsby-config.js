module.exports = {
  siteMetadata: {
    title: `AskAttilla`,
    description: `Personal webpage for AskAttilla, showcasing his work`,
    author: `AskAttilla`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },

    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/ 
        }
      }
    },
  ],
}
