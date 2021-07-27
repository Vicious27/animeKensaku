import React from 'react'

function MainContent(props) {
  return (
    <main>
      <div className="main-head">
        <form
          className="search-box"
          onSubmit={props.handleSearch}>
          <input
            type="search"
            placeholder="Looking for an Anime?"
            required
            value={props.search}
            onChange={e => props.setSearch(
              e.target.value)}></input>
        </form>
      </div>
    </main>
  )
}

export default MainContent
