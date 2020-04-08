import React from "react"
import { Link, graphql } from "gatsby"
import moment from 'moment'
import get from 'lodash.get'
import { Card, List } from "antd"
import { withPlugin } from 'tinacms'
import { RemarkCreatorPlugin } from 'gatsby-tinacms-remark'
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

const path = require('path')
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
        renderItem={({ node }) => console.log(node) || (
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
            date
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
          fileRelativePath
          rawFrontmatter
          rawMarkdownBody
          html
          id
        }
      }
    }
  }
`
const CreatePostPlugin = new RemarkCreatorPlugin({
  label: 'Create Post',
  fields: [
    { name: 'rawFrontmatter.title', label: 'Title', component: 'text', required: true },
    { name: 'rawFrontmatter.path', label: 'path', component: 'text', required: true, placeholder: '/path', },
    { name: 'rawFrontmatter.description', label: 'Description', component: 'textarea', required: true, },
    {
      name: 'rawFrontmatter.markdown',
      component: 'markdown',
      label: 'Post Body',
      description: 'Edit the body of the post here',
    },
    {
      name: 'rawFrontmatter.featureImage',
      label: 'featureImage',
      component: 'image',
      previewSrc: (formValues, { input }) => {
        const path = input.name.replace('rawFrontmatter', 'frontmatter')
        const gatsbyImageNode = get(formValues, path)
        console.log('formValue', formValues)
        if (!gatsbyImageNode) return ''
        //specific to gatsby-image
        return gatsbyImageNode.childImageSharp.fluid.src
      },

      // upload images to same directory as content file
      uploadDir: (blogPost, hh) => {
        console.log(hh)
        return path.join(`src/blog/`, 'images')
      },

      // image file is sibling of content file
      parse: filename => `../images/${filename}`,
    },
    // {
    //   name: 'featureImage',
    //   label: 'Feature Image',
    //   component: 'image',
    //   previewSrc: (formValues, { input }) => {
    //     const gatsbyImageNode = get(formValues, 'featureImage')
    //     console.log({path, gatsbyImageNode, formValues})
    //     if (!gatsbyImageNode) return ''
    //     //specific to gatsby-image
    //     return gatsbyImageNode.childImageSharp.fluid.src
    //   },

    //   // upload images to same directory as content file
    //   uploadDir: form => {
    //     console.log("lkjj", form)
    //     let slug = form.path.replace(/\s+/, '-').toLowerCase();
    //     console.log("hjelloo",`src/blog/${slug}/${form.featureImage}`)
    //     return `src/blog/${slug}`
    //   },

      // image file is sibling of content file
      // parse: filename => `${filename}`,
    // },
  ],
  filename: form => {
    console.log(form)
    let slug = form.rawFrontmatter.path.replace(/\s+/, '-').toLowerCase()
    return `src/blog/${slug}/index.md`
  },
  frontmatter: ({rawFrontmatter}) => console.log(rawFrontmatter) || ({

    title: rawFrontmatter.title,
    path: rawFrontmatter.path,
    description: rawFrontmatter.description,
    featureImage: rawFrontmatter.featureImage,
    date: rawFrontmatter.date || moment().format(),
  }),
  body: form => `This is a new blog post. Please write some content.`,
})

// 3. Add the plugin to the component
export default withPlugin(IndexPage, CreatePostPlugin)
// export default IndexPage
