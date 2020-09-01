import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const PageList2 = () => {
    const data = useStaticQuery(graphql`
        query {
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

    )
    return (
        <ul>
            {data.allSitePage.edges.map(({node}) => (
                <li><Link to={node.path}>{node.id} - 2</Link></li>
            ))}
        </ul>
    )
}

export default PageList2