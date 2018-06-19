const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider()); // Web3 instance for local test network

beforeEach(() => {
  // Get all accounts
  web3.eth.getAccounts()
    .then(fetchedAccounts => {
      console.log(fetchedAccounts);
    });


  // Use account to deploy contract
});

describe('Inbox', () => {
  it('deploys a contract', () => {
      
  });
});
