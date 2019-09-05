import React from "react"
import config from "../../config"
import ApolloClient from "apollo-boost"
import fetch from "isomorphic-fetch"
import { ApolloProvider } from "react-apollo"

const client = new ApolloClient({
  uri: `${config.wordPressUrl}/graphql`,
  fetch,
})

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
)
