import React from "react";
import bleachLogo from "../img/bleachlogo.png";

function Header() {
  return (
    <header>
      <h1>Anime<strong>
        Kensaku</strong>
      </h1>
      <img
        className="logo" alt="bleach-skull-logo"
        src={bleachLogo} />
    </header>
  )
};

export default Header;
