'use strict';
const { Contract } = require('fabric-contract-api');
class ValidationContract extends Contract {
    constructor() { super('ValidationContract'); }
    async validateBatch(ctx, batchId, status) {
        const val = { batchId, status, validatedAt: new Date().toISOString() };
        await ctx.stub.putState(batchId, Buffer.from(JSON.stringify(val)));
        return JSON.stringify(val);
    }
}
module.exports = ValidationContract;
