import React from "react";
import logo from "./logo.svg";
import "./css/main.min.css";
import MemeGenerator from "./components/MemeGenerator";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <MemeGenerator />
    </div>
  );
}

export default App;
