const path = require("path")

exports.createPages = async({ graphql, actions}) => {
    const { createPage } = actions

    const result = await graphql(`
    query {
        allFeedSampleBlog {
          edges {
            node {
              id
            }
          }
        }
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                path
              }
            }
          }
        }
      }
      
    `)

    result.data.allFeedSampleBlog.edges.forEach(({ node }) => {
        createPage({
            component: path.resolve("./src/templates/itemTemplate.js"),
            path: node.id,
            context: {
                id: node.id
            }
        })
    })

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
          component: path.resolve("./src/templates/blogPostTemplate.js"),
          path: node.frontmatter.path,
          context: {
              id: node.frontmatter.path
          }
      })
  })
}
