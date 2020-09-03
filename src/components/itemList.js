import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const ItemList = () => {
    const data = useStaticQuery(graphql`
    query {
        allFeedSampleBlog {
          edges {
            node {
              id
              title
            }
          }
        }
      }
    `

    )
    return (
        <ul>
            {data.allFeedSampleBlog.edges.map(({node}) => (
                <li><Link to={node.id}>{node.title}</Link></li>
            ))}
        </ul>
    )
}

export default ItemList