const { calculateInterest } = require("../script");

describe("Interest Rate Calculator", () => {

  it("calculates interest correctly", () => {
    expect(calculateInterest(1000, 10, 2)).toBe(200);
  });

  it("returns zero when principal is zero", () => {
    expect(calculateInterest(0, 5, 3)).toBe(0);
  });

});

