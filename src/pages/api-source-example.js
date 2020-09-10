import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const ApiSourceExamplePage = ({ data }) => {
    return (
        <Layout>
            <ul>
                {data.allStarWarsCharacter.edges.map(({node}) => (
                    <li>
                        {node.name}
                        <ul>
                            {node.films && node.films.map(film => (
                                <li>{film.title}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </Layout>
    )
}

export const query = graphql`
query MyQuery {
    allStarWarsCharacter {
      edges {
        node {
          name
          films {
            title
          }
        }
      }
    }
  }
`
export default ApiSourceExamplePage