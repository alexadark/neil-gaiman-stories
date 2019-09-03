import React from "react"

const Search = ({ onSearchStories, stories }) => {
  return (
    <input
      type="text"
      placeholder="search"
      onChange={e => onSearchStories(e.target.value, stories)}
    />
  )
}

export default Search
