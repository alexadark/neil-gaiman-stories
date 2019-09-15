/** @jsx jsx */

import { jsx, Styled, Flex, Box, Container } from "theme-ui"
import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ThankYou = () => {
  let [rehydrated, setRehydrated] = useState(false)
  const [picks, setPicks] = useState([])
  useEffect(() => {
    if (!rehydrated && window) {
      let ls = window.localStorage
      let data = ls.getItem("picks")
      if (data) setPicks(JSON.parse(data))
      setRehydrated(true) //Make sure this only loads once.
    }
  })

  console.log(picks)
  return (
    <Layout>
      <SEO title="Thank You" />
      <Container sx={{ textAlign: `center` }}>
        <Styled.h1 sx={{ textTransform: `uppercase` }}>
          Thank you for your vote
        </Styled.h1>
        <Box>
          Follow Neil Gaiman on Facebook to find out which stories make it
        </Box>
        <Box>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=https://www.gaimanfavorites.com/&quote=Calling all Neil Gaiman readers! Next year, William Morrow will publish the ultimate collection of fiction by Neil Gaiman – a must-have for fans and new readers alike. And we’d like you to help us – and Neil – choose the stories that will be included. ${picks.length >
              0 && picks[0].title} `}
            target="_blank"
          >
            fb
          </a>
        </Box>
      </Container>
    </Layout>
  )
}

export default ThankYou
