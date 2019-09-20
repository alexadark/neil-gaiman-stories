/** @jsx jsx */

import { jsx, Styled, Flex, Box, Container } from "theme-ui"
import React, { useState, useEffect } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BgImage from "gatsby-background-image"
import { Global } from "@emotion/core"
import { GlobalStyles } from "../styles/GlobalStyles"
import fbIcon from "../images/fb-icon.png"
import twitterIcon from "../images/twitter-icon.png"
import Footer from "../components/Footer"
import Carousel from "nuka-carousel"

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

  const data = useStaticQuery(graphql`
    query tyImageQuery {
      file(relativePath: { eq: "TY-bg.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <BgImage
      fluid={data.file.childImageSharp.fluid}
      backgroundColor="black"
      style={{ backgroundSize: `cover` }}
    >
      <Box sx={{ height: `100vh`, pt: `140px` }}>
        <Global styles={GlobalStyles} />

        <SEO title="Thank You" />
        <Container sx={{ textAlign: `center` }}>
          <h1
            sx={{
              textTransform: `uppercase`,
              fontFamily: "heading",
              fontSize: [`4rem`, `7.2rem`],
              color: `white`,
              fontWeight: 300,
              mb: `25px`,
              mt: 0,
            }}
          >
            Thank You for <span sx={{ color: `primary` }}>Your Vote</span>!
          </h1>
          <Box
            sx={{
              color: `white`,
              fontSize: `3rem`,
              fontWeight: 300,
              fontFamily: `body`,
            }}
          >
            Follow Neil Gaiman on Facebook to find out which stories make it.
          </Box>
          <Flex sx={{ justifyContent: `center`, mt: `15px`, mb: `30px` }}>
            <a
              href="https://www.facebook.com/neilgaiman/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={fbIcon} alt="facebook" />
            </a>
          </Flex>
          <Box
            sx={{
              color: `white`,
              fontSize: `2.4rem`,
              fontWeight: 300,
              fontFamily: `body`,
            }}
          >
            Tell your friends and share who you think will win at{" "}
            <span sx={{ color: `primary`, fontWeight: 500 }}>
              #VoteNeilCollection
            </span>
          </Box>
          <Flex
            sx={{
              justifyContent: `center`,
              ">div": { mx: `10px` },
              mt: `15px`,
            }}
          >
            <Box>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=https://www.gaimanfavorites.com/&quote=Calling all Neil Gaiman readers! Next year, William Morrow will publish the ultimate collection of fiction by Neil Gaiman – a must-have for fans and new readers alike. And we’d like you to help us – and Neil – choose the stories that will be included. ${picks.length >
                  0 && picks[0].title} `}
                target="_blank"
              >
                <img src={fbIcon} alt="facebook" />
              </a>
            </Box>
            <Box>
              <a
                href={`https://twitter.com/intent/tweet?text=all Neil Gaiman readers! Next year, William Morrow will publish the ultimate collection of fiction by Neil Gaiman – a must-have for fans and new readers alike. And we’d like you to help us – and Neil – choose the stories that will be included. ${picks.length >
                  0 && picks[0].title} &url=https://www.gaimanfavorites.com`}
                target="_blank"
              >
                <img src={twitterIcon} alt="twitter" />
              </a>
            </Box>
          </Flex>

          <Box
            sx={{
              fontFamily: `heading`,
              color: `white`,
              fontSize: `3.6rem`,
              fontWeight: 300,
              mt: `100px`,
            }}
          >
            Check out these books by{" "}
            <span sx={{ color: `primary` }}>Neil Gaimain</span>
          </Box>
          <Box>
            <Carousel
              slidesToShow={5}
              cellSpacing={20}
              autoplay={true}
              infiniteLoop={true}
              sx={{ mt: 50 }}
            >
              <img src="http://lorempixel.com/170/250" alt="" />
              <img src="http://lorempixel.com/170/250" alt="" />
              <img src="http://lorempixel.com/170/250" alt="" />
              <img src="http://lorempixel.com/170/250" alt="" />
              <img src="http://lorempixel.com/170/250" alt="" />
              <img src="http://lorempixel.com/170/200" alt="" />
            </Carousel>
          </Box>
        </Container>
        <Box sx={{ mt: 100 }}>
          <Footer />
        </Box>
      </Box>
    </BgImage>
  )
}

export default ThankYou
