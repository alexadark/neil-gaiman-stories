/** @jsx jsx */

import { jsx, Styled, Flex, Box, Container } from "theme-ui"
import AddIcon from "../images/add-icon.png"
import PickNumber from "./PickNumber"

const PickPlaceHolder = ({ i, togglePicks }) => {
  const closePicks = () => togglePicks(false)
  return (
    <Flex sx={{ alignItems: `center` }}>
      <Box>
        <Flex
          sx={{
            justifyContent: `center`,
            alignItems: `center`,
            bg: `secondary`,
            width: `102px`,
            height: `151px`,
            borderRadius: `20px`,
          }}
        >
          <Box>
            <img
              src={AddIcon}
              sx={{ cursor: `pointer` }}
              onClick={closePicks}
            />
          </Box>
        </Flex>
      </Box>
      <Box>
        <Flex sx={{ alignItems: `center` }}>
          <PickNumber i={i} />
          <div
            className="chooseLink"
            sx={{
              variant: `links.underlined`,
              width: 115,
            }}
            onClick={closePicks}
          >
            Choose Now
          </div>
        </Flex>
      </Box>
    </Flex>
  )
}

export default PickPlaceHolder
