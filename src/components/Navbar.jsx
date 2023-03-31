import React from "react";
import "./Navbar.css";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PersonIcon from "@mui/icons-material/Person";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { ethers } from "ethers";

function Navbar({account,setAccount}) {

  const connectHandler = async()=>{
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const account = ethers.utils.getAddress(accounts[0])
    setAccount(account);
  }

  return (
    <div className="Navbar">
      <div className="menu">
        <div className="logo">
          <img
            className="logo"
            src="https://cdn-icons-png.flaticon.com/512/2403/2403731.png"
            alt=""
          />
          <p>Dwitter</p>
        </div>
        <div className="menuDetail">
          <HomeIcon fontSize="large" />
          <p>Home</p>
        </div>
        <div className="menuDetail">
          <NotificationsIcon fontSize="large" />
          <p>Notifications</p>
        </div>
        <div className="menuDetail">
          <BookmarkIcon fontSize="large" />
          <p>Bookmarks</p>
        </div>
        <div className="menuDetail">
          <PersonIcon fontSize="large" />
          <p>Profile</p>
        </div>
        <div className="menuDetail">
          <img
            className="menuImage"
            src="https://cdn-icons-png.flaticon.com/512/2686/2686080.png"
            alt=""
          />
          <p>Followers</p>
        </div>
        <div className="menuDetail">
          <img
            className="menuImage"
            src="https://cdn-icons-png.flaticon.com/512/7542/7542137.png"
            alt=""
          />
          <p>Following</p>
        </div>
        <div className="menuDetail">
          <MoreVertIcon fontSize="large" />
          <p>More</p>
        </div>
        {/* <button id="dweet">Dweet</button> */}
      </div>
      <button id="dweet">Dweet</button>
      
        {account?(
        <button id="connectwallet">
          {/* eslint-disable-next-line */}
          <img src={require("./profile.jpg")} />
          <p>
            {account.slice(0, 6) + '...' + account.slice(38, 42)}{" "}
          </p>
        </button>
        ):(
          <button id="connectwallet" onClick = {connectHandler}>
          {/* eslint-disable-next-line */}
          <img src={require("./profile.jpg")} />
          <p>Connect Wallet</p>
        </button>
        )}
      
    </div>
  );
}

export default Navbar;
