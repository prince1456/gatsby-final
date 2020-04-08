import React from "react"
import { graphql } from "gatsby"
import Img from 'gatsby-image'
import { remarkForm } from 'gatsby-tinacms-remark'
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

const BlogPostForm = {
  label: 'Blog Post',
  fields: [
    {
      label: 'Title',
      name: 'rawFrontmatter.title',
      description: 'Enter the title of the post here',
      component: 'text',
    },
    {
      label: 'Description',
      name: 'frontmatter.description',
      description: 'Enter the post description',
      component: 'textarea',
    },
  ],
}

export const query = graphql`
    query blogPostByQuery ($path: String){
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
      ...TinaRemark
    }
  }
`
export default remarkForm(PostPage, BlogPostForm)
