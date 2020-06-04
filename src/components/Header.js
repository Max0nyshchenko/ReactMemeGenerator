import React from "react";
import lolimg from "../img/29168-7-lol.png";

function Header() {
  return (
    <header>
      <img src={lolimg} alt="lol art" />
      <h1>Meme Generator</h1>
      <img src={lolimg} alt="lol art" />
    </header>
  );
}

export default Header;
