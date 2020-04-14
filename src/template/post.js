import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { useLocalRemarkForm, DeleteAction } from "gatsby-tinacms-remark"
import Img from "gatsby-image"
import { ModalProvider } from "tinacms"
import { Carousel } from "antd"

import {
  InlineForm,
  InlineBlocks,
  InlineTextareaField,
  InlineWysiwyg,
  // InlineTextField,
  useInlineForm,
  InlineImageField,
} from "react-tinacms-inline"
import { BLOCKS, EditToggle } from "../components"
import { Typography, Row, Col, Input } from "antd"
import { useCMS } from "tinacms"
import "./post.css"

const { Search } = Input
const { Title, Paragraph } = Typography

// const get = require("lodash.get")

function BlogPostTemplate(props) {
  const siteTitle = props.data.site.siteMetadata.title
  const { previous, next } = props.pageContext
  const { allMarkdownRemark: { edges } } = props.data
  const cms = useCMS()
  const [post, form] = useLocalRemarkForm(
    props.data.markdownRemark,
    BlogPostForm
  )
  return (
    <ModalProvider>
      <InlineForm form={form}>
        <Layout location={props.location} title={siteTitle}>
          <div className="blog-top-picture">
            <Title>Blog</Title>
          </div>
          <Row>
            <Col style={{paddingRight: 40}} span={16}>
              {post.frontmatter.gallery && post.frontmatter.gallery.length > 0 && (
                <Carousel effect="fade">
                  {post.frontmatter.gallery.map((item, id) => {
                    return (
                      <div className="blog-slideshow--slide" key={id}>
                        <img src={item.src} alt={item.alt} />
                      </div>
                    )
                  })}
                </Carousel>
              )}
              <div
                style={{
                  backgroundColor: post.frontmatter.heading_color || "#ffffff",
                }}
              >
                <div
                  style={{
                    marginLeft: `auto`,
                    marginRight: `auto`,
                    padding: 25,
                  }}
                >
                  <Title
                    style={{
                      margin: 0,
                      marginTop: 10,
                    }}
                  >
                    <InlineTextareaField name="rawFrontmatter.title" />
                  </Title>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      {/* <InlineImageField
                    name="rawFrontmatter.featureImage"
                    // Generate the frontmatter value based on the filename
                    parse={filename =>
                      filename ? `../images/${filename}` : null
                    }
                    // Decide the file upload directory for the post
                    uploadDir={blogPost => {
                      console.log({ blogPost })
                      const postPathParts = blogPost.initialValues.fileRelativePath.split(
                        "/"
                      )
                      const postDirectory = postPathParts
                        .splice(0, postPathParts.length - 2)
                        .join("/")
                      return `${postDirectory}/images/`
                    }}
                  >
                    <Img
                      fluid={
                        post.frontmatter.featureImage.childImageSharp.fluid
                      }
                      alt="Gatsby can't find me"
                    />
                  </InlineImageField> */}
                      {/* <Img
                    fluid={post.frontmatter.featureImage.childImageSharp.fluid}
                    alt="Gatsby can't find me"
                  /> */}
                      <span style={{ fontWeight: "600" }}>
                        Date: {post.frontmatter.date}
                      </span>
                    </div>
                    {/**
                     * TODO: make inline toggle
                     */}
                    {/* <TinaField
                  name="rawFrontmatter.draft"
                  Component={MyToggle}
                  type="checkbox"
                >
                  {post.frontmatter.draft && (
                    <small style={{ color: "fuchsia" }}>Draft</small>
                  )}
                </TinaField> */}
                  </div>
                </div>
              </div>

              <div
                style={{
                  marginLeft: `auto`,
                  marginRight: `auto`,
                }}
              >
                {/**
                 * TODO: make inline select
                 */}

                {/* <TinaField
              name="rawFrontmatter.cool"
              Component={MySelect}
              options={[100, "Love this!", "How cool!"]}
            >
              <p>{post.frontmatter.cool}</p>
            </TinaField> */}
                <p>{post.frontmatter.cool}</p>

                <InlineBlocks
                  name="rawFrontmatter.blocks"
                  blocks={BLOCKS}
                ></InlineBlocks>

                <InlineWysiwyg
                  name="rawMarkdownBody"
                  imageProps={{
                    async upload(files) {
                      const directory = "/static/images/"

                      let media = await cms.media.store.persist(
                        files.map(file => ({
                          directory,
                          file,
                        }))
                      )

                      return media.map(m => `/images/${m.filename}`)
                    },
                  }}
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: props.data.markdownRemark.html,
                    }}
                  />
                </InlineWysiwyg>
              </div>
              <EditToggle />

              <div
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "#eaeaea",
                }}
              />
              <ul
                style={{
                  marginLeft: `auto`,
                  marginRight: `auto`,
                  display: `flex`,
                  flexWrap: `wrap`,
                  justifyContent: `space-between`,
                  listStyle: `none`,
                  padding: 0,
                }}
              >
                <li>
                  {previous && (
                    <Link to={previous.fields.slug} rel="prev">
                      ← {previous.frontmatter.title}
                    </Link>
                  )}
                </li>
                <li>
                  {next && (
                    <Link to={next.fields.slug} rel="next">
                      {next.frontmatter.title} →
                    </Link>
                  )}
                </li>
              </ul>
            </Col>
            <Col span={8}>
              <Search
                placeholder="input search text"
                onSearch={value => console.log(value)}
                style={{ width: 200, marginBottom: 30 }}
              />
              {
                edges.map(({node: { frontmatter }}, index) => (
                  <div key={index} style={{display: 'flex'}}>
                    <Img style={{width: 100, height: 100}} fluid={frontmatter.featureImage.childImageSharp.fluid} />
                    <Paragraph ellipsis style={{paddingLeft: 10, fontSize: 16}} >
                      {frontmatter.title}
                    </Paragraph>
                  </div>
                ))
              }
            </Col>
          </Row>
        </Layout>
      </InlineForm>
    </ModalProvider>
  )
}

/**
 * Blog Post Form
 */

export const ContentBlock = {
  label: "Content",
  key: "content-block",
  defaultItem: {
    content: "",
  },
  fields: [{ name: "content", label: "Content", component: "markdown" }],
}

const BlogPostForm = {
  actions: [DeleteAction],
  fields: [
    {
      label: "Gallery",
      name: "frontmatter.gallery",
      component: "group-list",
      defaultItem: {
        alt: "",
        src: "",
        photographer: {
          name: "",
          social: [],
        },
      },
      itemProps: item => ({
        key: item.src,
        label: item.alt,
      }),
      fields: [
        { name: "alt", component: "text" },
        { name: "src", component: "text" },
        {
          label: "Photographer",
          name: "photographer",
          component: "group",
          fields: [
            { name: "name", component: "text" },
            {
              name: "social",
              component: "group-list",
              fields: [
                { name: "platformName", component: "text" },
                { name: "account", component: "text" },
              ],
            },
          ],
        },
      ],
    },
    {
      label: "Page Sections",
      name: "frontmatter.blocks",
      component: "blocks",
      templates: {
        // TitleBlock,
        // ImageBlock,
        ContentBlock,
      },
    },
    {
      label: "Author",
      name: "frontmatter.fakeAuthor",
      component: "group",
      fields: [
        { name: "name", label: "Full Name", component: "text" },
        {
          name: "social",
          component: "group",
          fields: [
            { name: "twitter", component: "text" },
            { name: "facebook", component: "text" },
            { name: "instagram", component: "text" },
          ],
        },
      ],
    },
    {
      label: "Title",
      name: "frontmatter.title",
      component: "text",
      validate(value = "") {
        if (value.length < 5) {
          return `Please add ${5 - value.length} characters`
        }
        if (value.length > 100) {
          return `Please remove ${value.length - 100} characters`
        }
      },
    },
    {
      label: "Draft",
      name: "frontmatter.draft",
      component: "toggle",
    },
    {
      label: "New Shiny Select",
      name: "frontmatter.cool",
      component: "select",
      options: [100, "Love this!", "How cool!"],
    },
    {
      label: "Testing Number Component",
      name: "frontmatter.testNumber",
      component: "number",
      steps: 3,
    },
    {
      label: "Date",
      name: "frontmatter.date",
      component: "date",
    },
    {
      label: "Description",
      name: "frontmatter.description",
      component: "textarea",
    },
    {
      label: "body",
      name: "rawMarkdownBody",
      component: "markdown",
    },
    {
      label: "Heading color",
      name: "frontmatter.heading_color",
      component: "color",
      colors: ["#ff0000", "#ffff00", "#00ff00", "#0000ff"],
      widget: "sketch",
    },
    // {
    //   name: "frontmatter.featureImage",
    //   label: "featureImage",
    //   component: "image",
    //   // Generate the frontmatter value based on the filename
    //   parse: filename => (filename ? `./${filename}` : null),

    //   // Decide the file upload directory for the post
    //   uploadDir: blogPost => {
    //     let postPathParts = blogPost.fileRelativePath.split("/")

    //     let postDirectory = postPathParts
    //       .splice(0, postPathParts.length - 1)
    //       .join("/")

    //     return postDirectory
    //   },

    //   // Generate the src attribute for the preview image.
    //   previewSrc: (formValues, { input }) => {
    //     let path = input.name.replace("rawFrontmatter", "frontmatter")
    //     let gastbyImageNode = get(formValues, path)
    //     if (!gastbyImageNode) return ""
    //     return gastbyImageNode.childImageSharp.fluid.src
    //   },
    // },
  ],
}

export function DiscardChanges() {
  const { form } = useInlineForm()

  return (
    <button
      onClick={() => {
        form.finalForm.reset()
      }}
    >
      Discard Changes
    </button>
  )
}

/*
 ** Export -----------------------------------------------
 */
// export default inlineRemarkForm(BlogPostTemplate, BlogPostForm)
export default BlogPostTemplate

/*
 ** Data Fetching -----------------------------------------------
 */

export const pageQuery = graphql`
  query BlogPostBySlug($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMarkdownRemark(limit: 3) {
      edges {
        node {
          frontmatter {
            title
            featureImage {
              childImageSharp {
                fluid(maxHeight: 100 maxWidth: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      ...TinaRemark
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        # blocks {
        #   _template
        #   text
        #   alt
        #   src
        # }
        gallery {
          alt
          src
          photographer {
            name
          }
        }
        title
        date(formatString: "DD MMMM, YYYY")
        description
        heading_color
        draft
        cool
        featureImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
