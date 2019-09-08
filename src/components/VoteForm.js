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
      {(voteMutation, { data, error, loading }) => (
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
          <Styled.h3>
            Make it official
            <br />
            <span>Lock in your vote</span>
          </Styled.h3>
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
            onChange={e => setVote({ ...vote, messageInput: e.target.value })}
          />
          <input type="submit" value="submit" />
        </form>
      )}
    </Mutation>
  )
}

export default VoteForm
