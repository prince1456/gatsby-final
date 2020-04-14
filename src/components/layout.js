import React from "react"
import { Link } from "gatsby"
import { Layout as AntLayout } from "antd"
// import { rhythm, scale } from "../utils/typography"
import { createRemarkButton } from "gatsby-tinacms-remark"
import { withPlugin } from "tinacms"
import "./layout.css"

const { Header } = AntLayout
class Layout extends React.Component {
  render() {
    const { location, title = "Build Direct", children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    const header = (
      <h1
        style={{
          // ...scale(1.5),
          // marginBottom: rhythm(1.5),
          margin: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )

    return (
      <div style={{ maxWidth: 1250, padding: '0px 25px', margin: "10px auto" }}>
        <header>
          {header}
          <ul className="top-nav">
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
          </ul>
        </header>
        <main>{children}</main>
        <footer
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            padding: 10,
          }}
        >
          © {new Date().getFullYear()}, Designed by BuildDirect
        </footer>
      </div>
    )
  }
}

const CreatePostPlugin = createRemarkButton({
  label: "Create Post",
  filename({ title, path }) {
    return `src/blog/${path.replace(/\s+/g, "-").toLowerCase()}/index.md`
  },
  frontmatter({ title }) {
    // Asynchronously generate front matter by fetching data from some server.
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title,
          date: new Date(),
          heading_color: "#e6faf8",
          description: "A human friendy summary",
        })
      }, 1000)
    })
  },
  body({ title }) {
    return `# ${title}`
  },
  fields: [
    { name: "title", label: "Title", component: "text", required: true },
  ],
})

export default withPlugin(Layout, CreatePostPlugin)
