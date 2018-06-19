const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const provider = ganache.provider();
const web3 = new Web3(provider); // Web3 instance for local test network
const { interface, bytecode } = require('../compile');

let accounts;
let inbox;
const INITIAL_STRING = 'Hi there';
const UPDATE_STRING = 'Hi Justin!';

beforeEach(async () => {
  // Get all accounts
  accounts = await web3.eth.getAccounts();

  // Use account to deploy contract
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: [INITIAL_STRING] })
    .send({ from: accounts[0], gas: '1000000' });

  inbox.setProvider(provider);
});

describe('Inbox', () => {
  it('deploys a contract', () => {
    assert.ok(inbox.options.address);
  });

  it('verify initial message', async () => {
    const message = await inbox.methods.message().call();
    assert.equal(message, INITIAL_STRING);
  });

  it('verify set message', async () => {
    await inbox.methods.setMessage(UPDATE_STRING).send({ from: accounts[0] }); // Returns tx hash
    const message = await inbox.methods.message().call();
    assert.equal(message, UPDATE_STRING);
  });
});
