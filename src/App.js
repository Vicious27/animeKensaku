import React, { useState, useEffect } from 'react';
import Header from "./Components/Header";
import MainContent from './Components/MainContent';
import './App.css';


function App() {
  const [animeList, setAnimeList] = useState([]);
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <Header />
      <div className="content-wrap">
        <MainContent />
      </div>
    </div>
  )
}


export default App;