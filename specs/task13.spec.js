var assert = require("assert");
var assesment = require("../src/task13");

describe("task 13 test running", function() {
  // var base=10;
  //var height=20;
  it("should return 32", function() {
    assert.equal(assesment(9967), 9973);
  });
  it("should return 32", function() {
    assert.equal(assesment(345), 347);
  });
  it("should return 44", function() {
    assert.equal(assesment(98768), 98773);
  });
  it("should return 34", function() {
    assert.equal(assesment(5), 7);
  });
  it("should return 34 #end_test", function() {
    assert.equal(assesment(35), 37);
  });
});
