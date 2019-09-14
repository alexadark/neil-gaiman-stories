import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
/** @jsx jsx */
import { jsx, Styled, Container } from "theme-ui"

import BgImage from "gatsby-background-image"

const Header = ({ siteTitle, description }) => {
  const data = useStaticQuery(graphql`
    query bgImageQuery {
      file(relativePath: { eq: "header-bg.png" }) {
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
      style={{ backgroundSize: `fit`, backgroundPosition: `40% top` }}
    >
      <header
        sx={{
          p: `90px 30px 50px `,
        }}
      >
        <Container>
          <Styled.h1 style={{ margin: 0 }}>
            <Link
              to="/"
              sx={{
                color: `white`,
                textDecoration: `none`,
                fontSize: [`40px`, `72px`],
                fontWeight: 300,
                span: {
                  color: `primary`,
                },
              }}
              dangerouslySetInnerHTML={{ __html: siteTitle }}
            />
          </Styled.h1>
          <box
            sx={{
              color: `white`,
              fontSize: `1.6rem`,
              fontWeight: 300,
              lineHeight: `2.4rem`,
            }}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </Container>
      </header>
    </BgImage>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
