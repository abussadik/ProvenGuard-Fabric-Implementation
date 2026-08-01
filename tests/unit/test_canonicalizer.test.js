const { canonicalizePayload } = require('../../gateway/src/canonicalizer');
test('canonicalizePayload orders keys deterministically', () => {
    const obj = { b: 2, a: 1 };
    expect(canonicalizePayload(obj)).toBe('{"a":1,"b":2}');
});
