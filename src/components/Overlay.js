/** @jsx jsx */
import { jsx } from "theme-ui"

const Overlay = ({ arePicksOpen, togglePicks }) => {
  const style = arePicksOpen
    ? {
        position: `fixed`,
        left: 0,
        width: `100%`,
        height: `100%`,
        bg: `black`,
        opacity: 0.6,
        zIndex: 100,
      }
    : { display: `none` }
  return (
    <div sx={style} onClick={() => arePicksOpen && togglePicks(false)}></div>
  )
}

export default Overlay
