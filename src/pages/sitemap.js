import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"

const SitemapPage = ({ data }) => {
    return (
        <Layout>
            <ul>
                {data.allSitePage.edges.map(({node}) => (
                    <li><Link to={node.path}>{node.id}</Link></li>
                ))}
            </ul>
        </Layout>
    )
}

export const query = graphql`
    query SitemapQuery {
        allSitePage(filter: {path: {ne: "/sitemap/"}}) {
          edges {
            node {
              id
              path
            }
          }
        }
      }
`
export default SitemapPage