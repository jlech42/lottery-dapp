const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

//const API_KEY = 'OUQt3b4pfjvmKFEuBqOs';

const provider = new HDWalletProvider(
  'dad fog box trigger ten child parade build answer sweet train switch',
  'https://rinkeby.infura.io/OUQt3b4pfjvmKFEuBqOs'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('attempting to deploy from account', accounts[0]);
  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: '0x' + bytecode })
    .send({ gas: '1000000', from: accounts[0] });
  console.log('contract deployed to', result.options.address);
};

deploy();
