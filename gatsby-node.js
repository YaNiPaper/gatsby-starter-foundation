const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogList = path.resolve(`./src/templates/blog-list.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            frontmatter {
              slug
              template
              title
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create markdown pages
  const posts = result.data.allMarkdownRemark.edges
  let blogPostsCount = 0

  posts.forEach((post, index) => {
    const id = post.node.id
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.frontmatter.slug,
      component: path.resolve(
        `src/templates/${String(post.node.frontmatter.template)}.js`
      ),
      // additional data can be passed via context
      context: {
        id,
        previous,
        next,
      },
    })

    // Count blog posts.
    if (post.node.frontmatter.template === "blog-post") {
      blogPostsCount++
    }
  })

  // Create blog-list pages
  const postsPerPage = 9
  const numPages = Math.ceil(blogPostsCount / postsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: blogList,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.sourceNodes = ({ boundActionCreators, getNodes, getNode }) => {
    const { createNodeField } = boundActionCreators;

    const postsOfAuthors = {};
    // iterate thorugh all markdown nodes to link books to author
    // and build author index
    const markdownNodes = getNodes()
        .filter(node => node.internal.type === "MarkdownRemark")
        .forEach(node => {
            if (node.frontmatter.author) {
                const authorNode = getNodes().find(
                    node2 =>
                        node2.internal.type === "MarkdownRemark" &&
            node2.frontmatter.title === node.frontmatter.author
                );

                if (authorNode) {
                    createNodeField({
                        node,
                        name: "author",
                        value: authorNode.id,
                    });

                    // if it's first time for this author init empty array for his posts
                    if (!(authorNode.id in postsOfAuthors)) {
                        postsOfAuthors[authorNode.id] = [];
                    }
                    // add book to this author
                    postsOfAuthors[authorNode.id].push(node.id);
                }
            }
        });

    Object.entries(postsOfAuthors).forEach(([authorNodeId, postIds]) => {
        createNodeField({
            node: getNode(authorNodeId),
            name: "posts",
            value: postIds,
        });
    });
};
