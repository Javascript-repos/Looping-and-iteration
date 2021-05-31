const chai = require("chai");
const expect = chai.expect;
const ex1 = require("../src/task17");

describe("task 17 test running", () => {
  it("should calculate factorial", () => {
    let output = ex1(3);
    expect(output).to.equal(6);
  });
  it("should calculate factorial", () => {
    let output = ex1(12);
    expect(output).to.equal(479001600);
  });
  it("should calculate factorial #end_test", () => { 
    let output = ex1(10);
    expect(output).to.equal(3628800);
  });
});
