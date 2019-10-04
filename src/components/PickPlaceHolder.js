/** @jsx jsx */
import { jsx, Flex, Box } from "theme-ui"
import AddIcon from "../images/add-icon.png"
import PickNumber from "./PickNumber"

const PickPlaceHolder = ({ i, togglePicks }) => {
  const closePicks = () => togglePicks(false)
  return (
    <Flex sx={{ alignItems: `center` }}>
      <Box sx={{ pb: [120, 120, 0] }}>
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
              alt="placeholder"
            />
          </Box>
        </Flex>
      </Box>
      <Box>
        <Flex sx={{ height: 200 }}>
          <Flex sx={{ alignItems: `center`, mt: [`-120px`, `-120px`, 0] }}>
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
        </Flex>
      </Box>
    </Flex>
  )
}

export default PickPlaceHolder
