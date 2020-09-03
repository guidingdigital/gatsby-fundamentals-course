import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const ItemTemplate = ({ data }) => {
    const item= data.feedSampleBlog

    return (
        <Layout>
            <h1>{item.title}</h1>
            <div>Published on {item.pubDate}</div>
            <div dangerouslySetInnerHTML={{__html: item.content}} />
        </Layout>
    )
}

export const data = graphql`
    query ($id: String!) {
        feedSampleBlog(id: {eq: $id}) {
            id
            title
            pubDate
            content
        }
    }
`

export default ItemTemplate