/** @jsx jsx */
import { jsx, Styled, Flex, Box, Container } from "theme-ui"
import AddIcon from "../images/add-icon.png"

const PickPlaceHolder = () => {
  return (
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
  )
}

export default PickPlaceHolder
