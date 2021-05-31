var assert = require("assert");
var assesment = require("../src/task12");

describe("task 12 test running", function() {
  // var base=10;
  //var height=20;
  it("should return true", function() {
    assert.equal(assesment(7), true);
  });
  it("should return false", function() {
    assert.equal(assesment(100000), false);
  });
  it("should return true", function() {
    assert.equal(assesment(54748), true);
  });
  it("should return false #end_test", function() {
    assert.equal(assesment(79638), false);
  });
});
