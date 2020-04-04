import React from "react"
import { Link, graphql } from "gatsby"
import { Card, List } from "antd"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

const { Meta } = Card

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) =>
  console.log(edges) || (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 3,
        }}
        dataSource={edges}
        renderItem={({ node }) => (
          <List.Item>
            <Link key={node.id} to={node.frontmatter.path}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <Img
                    fluid={node.frontmatter.featureImage.childImageSharp.fluid}
                  />
                }
              >
                <Meta
                  title={node.frontmatter.title}
                  description={node.frontmatter.description}
                />
              </Card>
            </Link>
          </List.Item>
        )}
      />
      <Link to="/contact-us/">Go to page 2</Link>
    </Layout>
  )

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            date(formatString: "lll")
            description
            path
            title
            featureImage {
              childImageSharp {
                fluid(maxWidth: 390) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          html
          id
        }
      }
    }
  }
`

export default IndexPage
