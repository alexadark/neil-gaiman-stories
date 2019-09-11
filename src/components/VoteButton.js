/** @jsx jsx */

import { jsx, Styled, Flex, Box, Container } from "theme-ui"

const VoteButton = ({ picks }) => {
  const className = picks.length === 3 ? "active" : ""
  return <div className={className}>Vote Now</div>
}

export default VoteButton
