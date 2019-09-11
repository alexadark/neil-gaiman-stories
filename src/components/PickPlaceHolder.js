/** @jsx jsx */

import { jsx, Styled, Flex, Box, Container } from "theme-ui"
import AddIcon from "../images/add-icon.png"
import PickNumber from "./PickNumber"

const PickPlaceHolder = ({ i }) => {
  return (
    <Flex sx={{ justifyContent: `center` }}>
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
            <img src={AddIcon} alt="" />
          </Box>
        </Flex>
      </Box>
      <Box>
        <Flex sx={{ justifyContent: `center` }}>
          <PickNumber i={i} />
          <div
            sx={{
              variant: `links.underlined`,
            }}
          >
            Choose Now
          </div>
        </Flex>
      </Box>
    </Flex>
  )
}

export default PickPlaceHolder
