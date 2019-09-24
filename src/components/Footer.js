/** @jsx jsx */
import { jsx, Box } from "theme-ui"

const Footer = () => {
  const d = new Date()
  return (
    <footer
      sx={{
        p: `20px`,
        fontFamily: `body`,
        fontSize: 1,
        color: `white`,
        textAlign: `center`,
        pb: 120,
      }}
    >
      Copyright © {d.getFullYear()} HarperCollins Publishers. All rights
      reserved.
      <Box
        sx={{
          my: `10px`,
          a: {
            color: `primary`,
            ":hover": { color: `white` },
            textAlign: `center`,
          },
        }}
      >
        <a
          href="https://www.harpercollins.com/corporate/terms-of-use/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms of Use
        </a>{" "}
        <span sx={{ color: `#999`, mx: `5px` }}>|</span>
        <a
          href="https://www.harpercollins.com/terms-of-sale/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms of Sale
        </a>{" "}
        <span sx={{ color: `#999`, mx: `5px` }}>|</span>
        <a
          href="https://www.harpercollins.com/corporate/privacy-policy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy policy
        </a>
      </Box>
    </footer>
  )
}

export default Footer
