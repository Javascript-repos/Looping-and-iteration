const chai = require("chai");
const expect = chai.expect;
const ex1 = require("../src/task16");

describe("task 16 test running", () => {
  it("should calculate nth fibonaci term", () => {
    let output = ex1(15);
    expect(output).to.equal(610);
  });
  it("should calculate nth fibonaci term #end_test", () => {
    let output = ex1(1);
    expect(output).to.equal(1);
  });
});
