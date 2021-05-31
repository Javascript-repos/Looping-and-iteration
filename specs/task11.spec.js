var assert = require("assert");
var assesment = require("../src/task11");

describe("task 11 test running", function() {
  // var base=10;
  //var height=20;
  it("should return 4", function() {
    assert.equal(assesment(10), 4);
  });
  it("should return 25", function() {
    assert.equal(assesment(100), 25);
  });
  it("should return 168", function() {
    assert.equal(assesment(999), 168);
  });
  it("should return 1229 #end_test", function() {
    assert.equal(assesment(10000), 1229);
  });
});
