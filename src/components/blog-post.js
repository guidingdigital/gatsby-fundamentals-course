import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PropTypes from "prop-types"

const BlogPost = ({ title, author, abstract, children }) => {
    return (
        <Layout>
            <SEO title={title} />

            <h1>{title}</h1>

            {author &&
                <div>By {author.lastName}, {author.firstName}</div>
            }

            <div dangerouslySetInnerHTML={abstract} />

            <div>
                {children}
            </div>
        </Layout>
    )
}

BlogPost.defaultProps = {
    title: "Title Goes Here"
}

BlogPost.propTypes = {
    title: PropTypes.string,
    author: PropTypes.object,
    children: PropTypes.node.isRequired
}

export default BlogPost