function canonicalizePayload(payload) {
    const sortedKeys = Object.keys(payload).sort();
    const result = {};
    for (const key of sortedKeys) {
        result[key] = payload[key];
    }
    return JSON.stringify(result);
}
module.exports = { canonicalizePayload };
