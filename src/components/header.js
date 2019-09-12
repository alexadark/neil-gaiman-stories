import { Link } from "gatsby"
import PropTypes from "prop-types"
/** @jsx jsx */
import { jsx, Styled, Flex, Box, Container } from "theme-ui"
import headerBg from "../images/header-bg.png"

const Header = ({ siteTitle, description }) => (
  <header
    sx={{
      p: `90px 30px 50px `,
      background: `black url(${headerBg}) no-repeat 33% top`,
      backgroundSize: `fit`,
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
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
