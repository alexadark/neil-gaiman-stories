/** @jsx jsx */
import { jsx, Box } from "theme-ui"
import { useContext } from "react"
import { navigate } from "gatsby"

import { useMutation } from "@apollo/react-hooks"
import { gql } from "apollo-boost"
import { Input, Textarea } from "@rebass/forms"
import { VoteContext } from "../pages"

const XMLHttpRequest = require("xhr2")

const SUBMIT_VOTE_MUTATION = gql`
  mutation voteMutation($input: VoteMutationInput!) {
    voteMutation(input: $input) {
      voteSubmitted
    }
  }
`

const VoteForm = ({ setVote }) => {
  const vote = useContext(VoteContext)
  const [voteMutation, { data, error }] = useMutation(SUBMIT_VOTE_MUTATION, {
    variables: {
      input: vote,
    },
  })

  return (
    <Box
      sx={{
        bg: `primary`,
        p: [`60px 30px`, `60px 50px`],
        fontSize: [2, 3],
        fontFamily: `body`,
      }}
    >
      <form
        id="voteform"
        onSubmit={e => {
          e.preventDefault()
          voteMutation()
          navigate("/thank-you/")
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
          onChange={e => setVote({ ...vote, messageInput: e.target.value })}
        />
        {/* {displayError && (
          <Box
            sx={{
              textAlign: `center`,
              color: `#bb0909`,
              fontSize: 1,
              mb: `15px`,
            }}
          >
            {displayError}
          </Box>
        )} */}
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
      <Box sx={{ fontSize: 0, my: `10px`, textAlign: `center`, color: `#444` }}>
        {" "}
        Gaimanfavorites.com is a promotional service of HarperCollins
        Publishers, 195 Broadway, New York, NY 10007, providing information
        about the products of HarperCollins and its affiliates. By submitting
        your email address, you understand that you will receive email
        communications from Bookperk and other HarperCollins’ services. You may
        unsubscribe from these email communications at any time. If you have any
        questions, please review our privacy policy or email us at
        privacypolicy@harpercollins.com.
      </Box>
    </Box>
  )
}

export default VoteForm
