/** @jsx jsx */
import { jsx } from "theme-ui"

const VoteButton = ({ picks, handleClick }) => {
  const variant = picks.length === 3 ? "voteActive" : "voteDisabled"
  const clickAction = picks.length === 3 ? () => handleClick(true) : ""
  return (
    <div
      sx={{ variant: `buttons.${variant}`, m: `40px auto` }}
      onClick={clickAction}
    >
      Vote Now
    </div>
  )
}

export default VoteButton
