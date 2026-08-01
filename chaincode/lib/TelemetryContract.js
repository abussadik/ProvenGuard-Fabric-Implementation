'use strict';
const { Contract } = require('fabric-contract-api');
class TelemetryContract extends Contract {
    constructor() { super('TelemetryContract'); }
    async recordTelemetry(ctx, deviceId, payloadHash, signature) {
        const entry = { deviceId, payloadHash, signature, timestamp: new Date().toISOString() };
        await ctx.stub.putState(`${deviceId}_${Date.now()}`, Buffer.from(JSON.stringify(entry)));
        return JSON.stringify(entry);
    }
}
module.exports = TelemetryContract;
