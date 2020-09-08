import React from "react"
import Layout from "../components/layout"
import SampleImage2 from "../images/sample-image-2.png"
import "./working-with-images.scss"
import Img from "gatsby-image"
import { graphql } from "gatsby"

const WorkingWithImagesPage = ({data}) => {
    return (
        <Layout>
            <img src="/images/sample-image-1.png" alt="Sample 1" />

            <div>
                <img src={SampleImage2} alt="Sample 2" />
            </div>

            <div className="Sample3BackgroundImage">
                Sample 3
            </div>

            <div>
                <Img fixed={data.fixedImage.childImageSharp.fixed}
                    alt="Sample 4" />
            </div>

            <div>
                <Img fluid={data.fluidImage.childImageSharp.fluid}
                    alt="Sample 5"
                    style={{maxWidth: 600}} />
            </div>
        </Layout>
    )
}

export const query = graphql`
    query {
        fixedImage: file(relativePath: {eq: "sample-image-4.png"}) {
            childImageSharp {
                fixed(width: 400) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        fluidImage: file(relativePath: {eq: "sample-image-5.png"}) {
            childImageSharp {
                fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
  }
`

export default WorkingWithImagesPage