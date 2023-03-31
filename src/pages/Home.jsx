import React from "react";
import "./Home.css";
import Navbar from "../components/Navbar";
import Dweet from "../components/Dweet";
import Dweets from "../components/Dweets";

function Home() {
  return (
    <div className="Home">
      <div className="leftContent">
        <Navbar />
      </div>
      <div className="rightContent">
        <div className="head">
          <h1>Home</h1>
          <input type="text" />
        </div>
        <div className="head2">
          <p>For You</p>
          <p>Following</p>
        </div>
        <hr />
        <Dweet />
        <p id="show">Showing 500 tweets.</p>
        <hr />
        <Dweets/>
      </div>
    </div>
  );
}

export default Home;
