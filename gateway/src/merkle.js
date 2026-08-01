const crypto = require('crypto');
function buildMerkleRoot(elements) {
    if (elements.length === 0) return '';
    let hashes = elements.map(e => crypto.createHash('sha256').update(e).digest('hex'));
    while (hashes.length > 1) {
        if (hashes.length % 2 !== 0) hashes.push(hashes[hashes.length - 1]);
        const nextLevel = [];
        for (let i = 0; i < hashes.length; i += 2) {
            nextLevel.push(crypto.createHash('sha256').update(hashes[i] + hashes[i+1]).digest('hex'));
        }
        hashes = nextLevel;
    }
    return hashes[0];
}
module.exports = { buildMerkleRoot };
