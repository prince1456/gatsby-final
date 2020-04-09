const path = require('path')
const productsAPI = require('./mockData/data')
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