import {assert} from 'chai';

// Testes
describe("Canary Tests", function() {
  // coleção de testes
  it("should be true", function() {
    expect(true).toBe(true);
    //assertivas
    const result = true;
    assert.isTrue(result);
  });
})