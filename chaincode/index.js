'use strict';
const CertificationContract = require('./lib/CertificationContract');
const DeviceRegistryContract = require('./lib/DeviceRegistryContract');
const TelemetryContract = require('./lib/TelemetryContract');
const ValidationContract = require('./lib/ValidationContract');

module.exports.contracts = [
    CertificationContract,
    DeviceRegistryContract,
    TelemetryContract,
    ValidationContract
];
