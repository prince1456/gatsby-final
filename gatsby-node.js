const path = require('path')
const productsAPI = require('./mockData/data')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({actions, graphql })  => {
    const { createPage } = actions
    const PostPage = path.resolve('src/template/post.js')
    const productPage = path.resolve('src/template/product.js')
    return graphql(`{
        allMarkdownRemark {
            edges {
              node {
                id
                frontmatter {
                  date
                  title
                  description
                  path
                }
              }
            }
          }
    }`)
    .then(res => {
        if(res.errors) {
            return Promise.reject(res.errors)
        }
        res.data.allMarkdownRemark.edges.forEach(edge => {
            createPage({
                path: edge.node.frontmatter.path,
                component: PostPage
            })
        })

        const products = productsAPI.getProducts();
        products.forEach(product => {
          createPage({
            path: product._id,
            component: productPage,
            context:  {
              product
            }
          })
        })

    })
}


exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}



exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /finalForm/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}