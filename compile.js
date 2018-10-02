const path = require('path');
const fs = require('fs');
const solc = require('solc');

// Smart contract path
const lotteryPath = path.resolve(__dirname, 'contracts', 'Lottery.sol');

// Read source code
const source = fs.readFileSync(lotteryPath, 'utf8');

// Compile & export Inbox contract
module.exports = solc.compile(source, 1).contracts[':Lottery'];
