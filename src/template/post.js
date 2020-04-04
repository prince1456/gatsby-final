import React from "react"
import { graphql } from "gatsby"
import Img from 'gatsby-image'
import Layout from '../components/layout'
const PostPage = ({ data }) => {
    const { markdownRemark: { html, frontmatter}} = data
    return(
        <Layout>
        <h1>{frontmatter.title}</h1>
        <Img fluid={frontmatter.featureImage.childImageSharp.fluid}/>

        <hr/>
        <div dangerouslySetInnerHTML={{__html: html}}/>
        </Layout>
    )
}


export const query = graphql`
    query blogPostByQuery ($path: String)
  {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      html
      frontmatter {
        path
        title
        description
        date
        featureImage {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      }
    }
  }
`

export default PostPage
