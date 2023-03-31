import React from "react";
import "./Dweets.css";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import { FaUserAlt } from 'react-icons/fa';

function Dweets({account}) {
  return (
    <div className="Dweets">
      <div className="upper">
        <div className="up">
          {/* eslint-disable-next-line */}
          {/* <p>|</p> */}
          <img src={require("./profile.jpg")} />
          {account? (
            <>
            <p id="name">sam.eer..</p>
            <p id="address">{account.slice(0, 6) + '...' + account.slice(38, 42)}</p></>
          ):(
            <>
            <p id="name">user</p>
            <p id="address">@0x000..00</p></>
          )}
          <p id="dash">-</p>
          <p id="date">Feb 28</p>
        </div>
        <div className="upright">
          <BookmarkAddIcon fontSize="large" />
        </div>
      </div>
      <div className="down">
        <p className="content">
          This is currently a static prototype of decentral twitter. It can connect to a Wallet 
        </p>
      </div>
    </div>
  );
}

export default Dweets;
