import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const BlogPostTemplate = ({ data }) => {
    const item= data.markdownRemark

    return (
        <Layout>
            <h1>{item.frontmatter.title}</h1>
            <div>Published by {item.frontmatter.author}</div>
            <div dangerouslySetInnerHTML={{__html: item.html}} />
        </Layout>
    )
}

export const data = graphql`
    query ($id: String!) {
        markdownRemark(frontmatter: {path: {eq: $id}}) {
          frontmatter {
            title
            author
          }
          html
        }
      }
`

export default BlogPostTemplate