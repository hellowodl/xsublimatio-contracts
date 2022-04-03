rm -rf ./deployments
npx hardhat --network localhost deploy
node serveAddress.js
