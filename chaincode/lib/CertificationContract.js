'use strict';
const { Contract } = require('fabric-contract-api');
class CertificationContract extends Contract {
    constructor() { super('CertificationContract'); }
    async issueCertificate(ctx, certId, holder, scope) {
        const cert = { certId, holder, scope, issuedAt: new Date().toISOString() };
        await ctx.stub.putState(certId, Buffer.from(JSON.stringify(cert)));
        return JSON.stringify(cert);
    }
}
module.exports = CertificationContract;
