require("dotenv").config();

const contract = require("../artifacts/contracts/Shapes.sol/EmotionalShapes.json");
const ethers = require("@ethersproject/providers");
const ethers2 = require("@ethersproject/wallet");
const ethers3 = require("@ethersproject/contracts");


const contractInterface = contract.abi;

// https://docs.ethers.io/v5/api/providers
const provider = ethers.getDefaultProvider("ropsten", {
    alchemy: process.env.DEV_API_URL,
});

// https://docs.ethers.io/v5/api/signer/#Wallet
const wallet = new ethers2.Wallet(process.env.PRIVATE_KEY, provider);

//https://docs.ethers.io/v5/api/contract/contract
const emotionalShapes = new ethers3.Contract(
    process.env.YOUR_NFT_ADDRESS,
    contractInterface,
    wallet
);

const main = () => {
    emotionalShapes
        .mint(process.env.PUBLIC_KEY)
        .then((transaction) => console.log(transaction))
        .catch((e) => console.log("something went wrong", e));
};

main();