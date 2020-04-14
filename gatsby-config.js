module.exports = {
  siteMetadata: {
    title: `BuildDirect POC`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-mdx`,
    `gatsby-tinacms-mdx`,
    {
      resolve: "gatsby-plugin-tinacms",
      options: {
        manualInit: true,
        sidebar: {
          hidden: process.env.NODE_ENV === "production",
          position: "displace",
        },
        toolbar: {
          hidden: false,
        },
        plugins: [
          "gatsby-tinacms-teams",
          "gatsby-tinacms-json",
          "gatsby-tinacms-remark",
          'gatsby-tinacms-git',
          // {
          //   resolve: "gatsby-tinacms-git",
          //   options: {
          //     pathToRepo: 'https://github.com/prince1456/gatsby-final',
          //     // pathToContent: "packages/demo-gatsby",
          //     defaultCommitMessage: "chore: update from tina",
          //     defaultCommitName: "TinaCMS",
          //     defaultCommitEmail: "akbar.alizadeh5@gmail.com",
          //     pushOnCommit: false,
          //   },
          // },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'posts',
        path: `${__dirname}/src/blog`
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './mockData/data.json',
        name: 'data'
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
   
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `BuildDirect POC`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-antd'
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
