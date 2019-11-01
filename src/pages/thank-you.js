/** @jsx jsx */

import { jsx, Flex, Box, Container } from "theme-ui"
import { useState, useEffect } from "react"
import { useStaticQuery, graphql, navigate } from "gatsby"
import SEO from "../components/seo"
import BgImage from "gatsby-background-image"
import { Global } from "@emotion/core"
import { GlobalStyles } from "../styles/GlobalStyles"
import fbIcon from "../images/fb-icon.png"
import twitterIcon from "../images/twitter-icon.png"
import instaIcon from "../images/insta-icon.svg"
import Footer from "../components/Footer"
import Img from "gatsby-image"
import Slider from "react-slick"
import Prev from "../images/prev-icon.svg"
import Next from "../images/next-icon.svg"

import "../styles/slick.css"
import "../styles/slick-theme.css"

const ThankYou = props => {
  let [rehydrated, setRehydrated] = useState(false)
  const [picks, setPicks] = useState([])
  useEffect(() => {
    navigate("/")
    if (!rehydrated && window) {
      let ls = window.localStorage
      let data = ls.getItem("picks")
      if (data) setPicks(JSON.parse(data))
      setRehydrated(true) //Make sure this only loads once.
    }
  })

  const data = useStaticQuery(graphql`
    query tyQuery {
      file(relativePath: { eq: "TY-bg.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      wpgraphql {
        books(first: 1000) {
          nodes {
            bookFields {
              isbn
            }
            featuredImage {
              altText
              sourceUrl
              imageFile {
                childImageSharp {
                  fluid(maxWidth: 300, quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const { books } = data.wpgraphql

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
            Follow Neil Gaiman to find out which stories make it.
          </Box>
          <Flex
            sx={{
              justifyContent: `center`,
              mt: `15px`,
              mb: `30px`,
              ">div": { mx: `10px` },
            }}
          >
            <Box>
              <a
                href="https://www.facebook.com/neilgaiman/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={fbIcon} alt="facebook" />
              </a>
            </Box>
            <Box>
              <a
                href="https://twitter.com/neilhimself"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitterIcon} alt="twitter" />
              </a>
            </Box>
            <Box>
              <a
                href="https://www.instagram.com/neilhimself/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instaIcon} alt="instagram" />
              </a>
            </Box>
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
                href={`https://www.facebook.com/sharer/sharer.php?u=https://www.gaimanfavorites.com/&quote=My favorite Neil Gaiman story is "${picks.length >
                  0 &&
                  picks[0].title.replace(
                    /<[^>]*>?/gm,
                    ""
                  )}". What's yours? Next year, William Morrow will publish the ultimate collection of Neil Gaiman stories—a must-have for longtime fans and new readers alike. Your vote will help Neil choose the stories to include. Vote now at https://www.gaimanfavorites.com. `}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={fbIcon} alt="facebook" />
              </a>
            </Box>
            <Box>
              <a
                href={`https://twitter.com/intent/tweet?text=Next year, @wmmorrowbooks will publish the ultimate collection of Neil Gaiman stories—a must-have for longtime fans and new readers alike. Your vote will help @neilhimself choose the stories to include. https://www.gaimanfavorites.com %23VoteNeilCollection`}
                target="_blank"
                rel="noopener noreferrer"
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
              mb: `20px`,
            }}
          >
            Check out these books by{" "}
            <span sx={{ color: `primary` }}>Neil Gaiman</span>
          </Box>
          <Box>
            <Slider
              {...settings}
              sx={{
                ".slick-prev:before, .slick-next:before": {
                  fontSize: `0 !important`,
                  content: "",

                  width: `50px`,
                  height: `81px`,
                  position: `absolute !important`,
                  top: 0,
                  display: [`none`, `none`, `block`],
                },
                ".slick-prev:before": {
                  background: `url(${Prev}) no-repeat`,
                  left: `-30px`,
                },
                ".slick-next:before": {
                  background: `url(${Next}) no-repeat`,
                  right: `-30px`,
                },
              }}
            >
              {books.nodes.map(book => (
                <Box sx={{ px: `10px` }}>
                  <a
                    href={`https://www.harpercollins.com/${book.bookFields.isbn}`}
                    target="_blank"
                    rel="noopener"
                  >
                    <Img
                      fluid={book.featuredImage.imageFile.childImageSharp.fluid}
                      alt={book.altText}
                    />
                  </a>
                </Box>
              ))}
            </Slider>
          </Box>
        </Container>

        <Flex sx={{ justifyContent: `center`, mt: 50 }}>
          <a
            href="https://www.harpercollins.com/authors/neilgaiman/ "
            target="_blank"
            rel="noopener"
            sx={{ variant: `buttons.voteActive` }}
          >
            VIEW MORE
          </a>
        </Flex>
        <Box sx={{ mt: 100 }}>
          <Footer />
        </Box>
      </Box>
    </BgImage>
  )
}

export default ThankYou
