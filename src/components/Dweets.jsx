import React from "react";
import "./Dweets.css";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";

function Dweets() {
  return (
    <div className="Dweets">
      <div className="upper">
        <div className="up">
          {/* eslint-disable-next-line */}
          <img src={require("./pfp2.png")} />
          <p id="name">Ankit Gupta</p>
          {/* <p>|</p> */}
          <p id="address">@0x123..f3</p>
          <p id="dash">-</p>
          <p id="date">Feb 28</p>
        </div>
        <div className="upright">
          <BookmarkAddIcon fontSize="large" />
        </div>
      </div>
      <div className="down">
        <p className="content">
          HTML → CSS → Javascript → ReactJS → API → NextJS → Database This seems
          to be the most popular path these days. What's yours?
        </p>
      </div>
    </div>
  );
}

export default Dweets;
