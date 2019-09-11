/** @jsx jsx */
import { jsx, Styled, Flex, Box } from "theme-ui"
import React, { useContext } from "react"
import { Mutation } from "react-apollo"
import { gql } from "apollo-boost"
import { VoteContext } from "../pages"

const SUBMIT_VOTE_MUTATION = gql`
  mutation voteMutation($input: VoteMutationInput!) {
    voteMutation(input: $input) {
      voteSubmitted
    }
  }
`

const VoteForm = ({ setVote }) => {
  const vote = useContext(VoteContext)
  return (
    <Mutation mutation={SUBMIT_VOTE_MUTATION}>
      {(voteMutation, { data, errors, loading }) => {
        console.log("data", data, "errors", errors)
        return (
          <Box sx={{ bg: `primary`, p: `60px 50px`, fontSize: 3 }}>
            <form
              onSubmit={e => {
                e.preventDefault()
                voteMutation({
                  variables: {
                    input: vote,
                  },
                })
              }}
            >
              <Box
                sx={{
                  fontFamily: `heading`,
                  color: `white`,
                  fontSize: `60px`,
                  texTransform: `capitalize`,
                }}
              >
                Make it official!
              </Box>
              <Box>Lock in your vote</Box>
              <input
                type="text"
                placeholder="e-mail address*"
                value={vote.emailInput}
                onChange={e => setVote({ ...vote, emailInput: e.target.value })}
              />
              <Styled.p>Tell us the reason for your #1 Pick:</Styled.p>
              <textarea
                cols="30"
                rows="10"
                placeholder="enter your answer"
                value={vote.messageInput}
                onChange={e =>
                  setVote({ ...vote, messageInput: e.target.value })
                }
              />
              <input type="submit" value="submit" />
            </form>
          </Box>
        )
      }}
    </Mutation>
  )
}

export default VoteForm
