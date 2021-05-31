var assert = require("assert");
var assesment = require("../src/task07");

describe("task 07 test running", function() {
  // var base=10;
  //var height=20;
  it("should return 24", function() {
    assert.equal(assesment(4), 24);
  });
  it("should return 720", function() {
    assert.equal(assesment(6), 720);
  });
  it("should return 3628800", function() {
    assert.equal(assesment(10), 3628800);
  });
  it("should return 1307674368000 #end_test", function() {
    assert.equal(assesment(15), 1307674368000);
  });
});
