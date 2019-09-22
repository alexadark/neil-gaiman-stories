/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

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
      reserved.{" "}
      <Link
        sx={{ color: `primary`, ":hover": { color: `white` } }}
        to="/terms-and-conditions"
      >
        Terms & Conditions.
      </Link>
    </footer>
  )
}

export default Footer
