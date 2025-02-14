import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import PureBootstrap from "../components/pure-bootstrap"
import ReactBootstrap from "../components/react-bootstrap"
import ItemList from "../components/itemList"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home Page</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

    <PureBootstrap />

    <ReactBootstrap />

    <ItemList />

  </Layout>
)

export default IndexPage
