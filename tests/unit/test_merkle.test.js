const { buildMerkleRoot } = require('../../gateway/src/merkle');
test('buildMerkleRoot computes non-empty root', () => {
    const root = buildMerkleRoot(['data1', 'data2']);
    expect(root).toHaveLength(64);
});
