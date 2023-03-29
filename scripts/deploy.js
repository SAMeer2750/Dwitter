const { ethers } = require("hardhat");
const hre = require("hardhat");

const main = async function (){
    const dwiter = await ethers.getContractFactory("Dwiter");
    const Dwiter = await dwiter.deploy();
    await Dwiter.deployed();
    console.log(`\nDwiter contract is deloyed at: ${Dwiter.address}`)
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});