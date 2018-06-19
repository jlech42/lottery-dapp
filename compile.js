const path = require('path');
const fs = require('fs');
const solc = require('solc');

// Smart contract path
const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');

// Read source code
const source = fs.readFileSync(inboxPath, 'utf8');

// Compile & export Inbox contract
module.exports = solc.compile(source, 1).contracts[':Inbox'];
