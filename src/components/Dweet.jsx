import React from "react";
import "./Dweet.css";

function Dweet() {
  return (
    <div className="Dweet">
      <div className="up">
        {/* eslint-disable-next-line */}
        <img src={require("./pfp2.png")} />
        <textarea placeholder="What's Happening..?"></textarea>
      </div>
      <div className="down">
        <button>Dweet</button>
      </div>
      <hr />
    </div>
  );
}

export default Dweet;
