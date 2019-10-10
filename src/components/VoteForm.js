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

const http = new XMLHttpRequest()
const url = "https://www.pages02.net/harpercollins/201910-gaimanfavorites/gfsub"

http.open("POST", url, true)

//Send the proper header information along with the request
http.setRequestHeader("Content-type", "application/x-www-form-urlencoded")

http.onreadystatechange = function() {
  //Call a function when the state changes.
  if (http.readyState === 4 && http.status === 200) {
    alert(http.responseText)
  }
}

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

          var xhr = new XMLHttpRequest()
          xhr.open('GET', `https://api2.ibmmarketingcloud.com/XMLAPI?xml=%3CEnvelope%3E%3CBody%3E%3CAddRecipient%3E%3CLIST_ID%3E3089299%3C%2FLIST_ID%3E%3CCREATED_FROM%3E2%3C%2FCREATED_FROM%3E%3CUPDATE_IF_FOUND%3Etrue%3C%2FUPDATE_IF_FOUND%3E%3CCONTACT_LISTS%3E%3CCONTACT_LIST_ID%3E4796792%3C%2FCONTACT_LIST_ID%3E%3CCONTACT_LIST_ID%3E10123378%3C%2FCONTACT_LIST_ID%3E%3C%2FCONTACT_LISTS%3E%3CCOLUMN%3E%3CNAME%3EEMAIL%3C%2FNAME%3E%3CVALUE%3E${vote.emailInput}%3C%2FVALUE%3E%3C%2FCOLUMN%3E%3CCOLUMN%3E%3CNAME%3EBookperkStatus%3C%2FNAME%3E%3CVALUE%3EYes%3C%2FVALUE%3E%3C%2FCOLUMN%3E%3CCOLUMN%3E%3CNAME%3EBookperk_marketingcode%3C%2FNAME%3E%3CVALUE%3EGaiman_Favorites_201910%3C%2FVALUE%3E%3C%2FCOLUMN%3E%3CCOLUMN%3E%3CNAME%3EMarketing%20Code%3C%2FNAME%3E%3CVALUE%3EGaiman_Favorites_201910%3C%2FVALUE%3E%3C%2FCOLUMN%3E%3CCOLUMN%3E%3CNAME%3EMarketing%20Code%3C%2FNAME%3E%3CVALUE%3EGaiman_Favorites_201910%3C%2FVALUE%3E%3C%2FCOLUMN%3E%3CCOLUMN%3E%3CNAME%3EMarketingCode_Last%3C%2FNAME%3E%3CVALUE%3EGaiman_Favorites_201910%3C%2FVALUE%3E%3C%2FCOLUMN%3E%3C%2FAddRecipient%3E%3C%2FBody%3E%3C%2FEnvelope%3E%0A`, true);
          xhr.onreadystatechange = function() {
            //Call a function when the state changes.
            if (xhr.readyState === 4 && xhr.status === 200) {
              alert(xhr.responseText)
            }
          }

         xhr.send()

          http.send(
            `formSourceName=StandardForm&sp_exp=yes&BookperkOptIn_lastmod=01/01/1950&BookperkStatus=Yes&Bookperk_marketingcode=Gaiman Favorites 201910&Marketing Code=Gaiman Favorites 201910&MarketingCode_Last=Gaiman Favorites 201910&Email=${vote.emailInput}`
          )
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
