import React, { useState } from 'react';
import Header from "./Components/Header";
import MainContent from './Components/MainContent';
import './App.css';


function App() {
  const [animeList, setAnimeList] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearch = e => {
    e.preventDefault();

    FetchAnime(search);
  }

  // API path https://api.jikan.moe/v3
  const FetchAnime = async (query) => {
    const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=12`)
      .then(res => res.json())

    setAnimeList(temp.results)
  }

  return (
    <div className="App">
      <Header />
      <div className="content-wrap">
        <MainContent
          handleSearch={handleSearch}
          search={search}
          setSearch={setSearch}
          animeList={animeList} />
      </div>
    </div>
  )
}


export default App;