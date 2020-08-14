import React from "react"
import BlogPost from "../components/blog-post"

const SampleBlogPostPage = () => {
    const author = {
        firstName: "Phil",
        lastName: "Sparks"
    }
    return (
        <BlogPost
            title="Gatsby Components 101"
            abstract={{__html: "Blog post about <strong>Gatsby</strong> components."}}
        >
            <div>Types of Gatsby Components</div>
            <ul>
                <li>layout</li>
                <li>Page</li>
                <li>Template</li>
                <li>non-page</li>
            </ul>
        </BlogPost>
    )
}

export default SampleBlogPostPage