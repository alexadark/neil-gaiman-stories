const { createRemoteFileNode } = require("gatsby-source-filesystem")

/**
 * Download WordPress images, add them to GraphQL schema.
 * @link https://www.gatsbyjs.org/docs/node-apis/#createResolvers
 * @link https://www.gatsbyjs.org/packages/gatsby-source-filesystem/?=#createremotefilenode
 */
exports.createResolvers = async ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
}) => {
  const { createNode } = actions
  const resolvers = {
    WPGraphQL_MediaItem: {
      imageFile: {
        type: "File",
        resolve: source => {
          return createRemoteFileNode({
            cache,
            createNode,
            createNodeId,
            store,
            url: source.sourceUrl,
          })
        },
      },
    },
  }
  await createResolvers(resolvers)
}
