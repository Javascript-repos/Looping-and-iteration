var assert = require("assert");
var assesment = require("../src/task01");

describe("task 01 test running", function() {
  // var base=10;
  //var height=20;
  it("should return 550", function() {
    assert.equal(assesment(10), 550);
  });
  it("should return 5445", function() {
    assert.equal(assesment(99), 5445);
  });
  it("should return 54945", function() {
    assert.equal(assesment(999), 54945);
  });
  it("should return 7480  #end_test", function() {
    assert.equal(assesment(136), 7480);
  });
});
