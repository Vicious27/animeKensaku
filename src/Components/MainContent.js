import React from 'react'
import AnimeCard from './AnimeCard';

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
        <div className="anime-list">
          {props.animeList.map(anime => (
            <AnimeCard
              anime={anime}
              key={anime.mal_id} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default MainContent
