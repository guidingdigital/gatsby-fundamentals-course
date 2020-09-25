module.exports = {
  siteMetadata: {
    title: `Gatsby Fundamentals Course`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://www.example.com`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/dog-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/google-sitemap.xml`,
        exclude: [`/using-typescript/`],
      }
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://www.netlify.com/blog/index.xml`,
        name: `SampleBlog`
      }
    },
    {
      resolve: "gatsby-source-apiserver",
      options: {
        url: `https://swapi.dev/api/people/`,
        method: "get",
        headers: {
          "Content-Type": "application/json"
        },  
        name: `StarWarsCharacter`,
        entityLevel: `results`,
      }
    },
    {
      resolve: "gatsby-source-apiserver",
      options: {
        url: `https://swapi.dev/api/films/`,
        method: "get",
        headers: {
          "Content-Type": "application/json"
        },  
        name: `StarWarsFilm`,
        entityLevel: `results`,
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  mapping: {
    "StarWarsCharacter.films" : "StarWarsFilm.url"
  }
}
