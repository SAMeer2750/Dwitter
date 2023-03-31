import React from "react";
import "./Home.css";
import Navbar from "../components/Navbar";
import Dweet from "../components/Dweet";
import Dweets from "../components/Dweets";
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';

function Home() {

  const [provider,setProvider] = useState(null)
  const [account, setAccount] = useState(null)

  const loadBlockchainData = async () =>{
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    setProvider(provider)

    const network = await provider.getNetwork()

    window.ethereum.on("accountsChanged", async () => {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = ethers.utils.getAddress(accounts[0]);
      setAccount(account);
    });

  }

  useEffect(()=>{
    loadBlockchainData()
  },[])

  return (
    <div className="Home">
      <div className="leftContent">
        <Navbar account={account} setAccount= {setAccount} />
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
        <Dweets account={account}/>
      </div>
    </div>
  );
}

export default Home;
