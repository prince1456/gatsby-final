const path = require('path')

exports.createPages = ({actions, graphql })  => {
    const { createPage } = actions
    const PostPage = path.resolve('src/template/post.js')

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
        console.log(res)
        res.data.allMarkdownRemark.edges.forEach(edge => {
            createPage({
                path: edge.node.frontmatter.path,
                component: PostPage
            })
        })
    })
}