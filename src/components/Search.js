/** @jsx jsx */
import { jsx, Box } from "theme-ui"
import React from "react"
import { Input } from "@rebass/forms"
import searchIcon from "../images/search-icon.png"

const Search = ({ onSearchStories, stories }) => {
  return (
    <Box sx={{ position: `relative` }}>
      <Input
        sx={{ mt: `-20px` }}
        variant="searchInput"
        type="text"
        placeholder="Search for Short Story Title"
        onChange={e => onSearchStories(e.target.value, stories)}
      />
      <img
        sx={{ position: `absolute`, right: 15, top: 12 }}
        src={searchIcon}
        alt=""
      />
    </Box>
  )
}

export default Search
