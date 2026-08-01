'use strict';
const { Contract } = require('fabric-contract-api');
class DeviceRegistryContract extends Contract {
    constructor() { super('DeviceRegistryContract'); }
    async registerDevice(ctx, deviceId, owner, deviceType) {
        const device = { deviceId, owner, deviceType, status: 'ACTIVE' };
        await ctx.stub.putState(deviceId, Buffer.from(JSON.stringify(device)));
        return JSON.stringify(device);
    }
}
module.exports = DeviceRegistryContract;
