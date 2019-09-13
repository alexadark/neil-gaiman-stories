/** @jsx jsx */
import { jsx, Styled, Flex, Box } from "theme-ui"
import React, { useContext } from "react"
import { navigate, Link } from "gatsby"
import { Mutation } from "react-apollo"
import { gql } from "apollo-boost"
import { Input, Textarea, Label } from "@rebass/forms"
import { VoteContext } from "../pages"
import { lighten } from "polished"

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
          <Box
            sx={{
              bg: `primary`,
              p: `60px 50px`,
              fontSize: [2, 3],
              fontFamily: `body`,
            }}
          >
            <form
              onSubmit={e => {
                e.preventDefault()
                voteMutation({
                  variables: {
                    input: vote,
                  },
                }).then(navigate("/thank-you/"))
              }}
            >
              <Box
                sx={{
                  fontFamily: `heading`,
                  color: `white`,
                  fontSize: [`40px`, `60px`],
                  textTransform: `capitalize`,
                }}
              >
                Make it official!
              </Box>
              <Box>
                Lock in your vote{" "}
                <abr
                  sx={{
                    color: `#ff0000`,
                    fontSize: `16px`,
                    position: `relative`,
                    top: `-5px`,
                    left: `-7px`,
                  }}
                >
                  *
                </abr>
              </Box>
              <Input
                type="email"
                placeholder="email address"
                value={vote.emailInput}
                onChange={e => setVote({ ...vote, emailInput: e.target.value })}
                required
                sx={{ mb: `20px` }}
              />
              <Box>Tell us the reason for your #1 Pick:</Box>
              <Textarea
                placeholder="Let us know here."
                sx={{ mb: `10px` }}
                value={vote.messageInput}
                onChange={e =>
                  setVote({ ...vote, messageInput: e.target.value })
                }
              />
              <input
                type="submit"
                value="Vote Now"
                sx={{ variant: `buttons.submit` }}
              />
            </form>
            <Box
              sx={{
                color: `#bb0909`,
                fontSize: 1,
                textAlign: `center`,
                fontWeight: 300,
                mt: `10px`,
              }}
            >
              *Required
            </Box>
            <Link
              to="./terms-and-conditions"
              sx={{
                color: `#382500`,
                fontWeight: 900,
                textAlign: `center`,
                textDecoration: `underline`,
                fontSize: 1,
                display: `block`,
                mt: `5px`,
                cursor: `pointer`,
                "&:hover": {
                  color: lighten(0.1, `#382500`),
                },
              }}
            >
              Terms and Conditions
            </Link>
          </Box>
        )
      }}
    </Mutation>
  )
}

export default VoteForm
