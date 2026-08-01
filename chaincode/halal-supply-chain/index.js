'use strict';
const { Contract } = require('fabric-contract-api');
class HalalSupplyChainContract extends Contract {
    async initLedger(ctx) {
        console.log('Ledger Initialized');
    }
}
module.exports = HalalSupplyChainContract;
