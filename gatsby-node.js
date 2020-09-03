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
}
