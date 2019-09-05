import React from "react"
import { Mutation } from "react-apollo"
import { gql } from "apollo-boost"

const SUBMIT_VOTE_MUTATION = gql`
  mutation voteMutation($input: VoteMutationInput!) {
    voteMutation(input: $input) {
      voteSubmitted
    }
  }
`

const VoteForm = () => {
  return (
    <Mutation mutation={SUBMIT_VOTE_MUTATION}>
      {(voteMutation, { data, error, loading }) => (
        <h1
          onClick={() => {
            voteMutation({
              variables: {
                input: {
                  clientMutationId: "submitVote",
                  emailInput: "test@gmail.com",
                  messageInput: "test message",
                  votesInput: [33, 34, 35],
                },
              },
            })
          }}
        >
          Form
        </h1>
      )}
    </Mutation>
  )
}

export default VoteForm
