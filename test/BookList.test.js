import {assert} from 'chai';

describe("Canary Tests", function() {
 
  it("should be true", function() {
    expect(true).toBe(true);
    
    const result = true;
    assert.isTrue(result);
  });
})