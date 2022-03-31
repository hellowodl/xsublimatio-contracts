# XSublimatio

## Instructions

Compile with `npm run compile`

Build distributable with `npm run build`

Test with `npm run test`

On PRs or pishes to master, an array of tests are done in CI. On pushes of new tags, package is published to npmjs in CD.


## Deployment for development environments

Install [Ganache](https://trufflesuite.com/ganache/index.html), then copy the private key of the first user from the Accounts list by clicking the private key button.  
Use both the private and public key to fill out the .env.example file.  
You should then be able to install the contracts with `npx hardhat --network localhost deploy`  
