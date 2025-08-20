// app.test.js

test("One euro should be 1.07 dollars", function () {
  const { fromEuroToDollar } = require("./app.js");

  const dollars = fromEuroToDollar(3.5);
  const expected = 3.5 * 1.07;

  expect(dollars).toBe(expected);
});

test("One dollar should be 146.26 yenes", function () {
  const { fromDollarToYen } = require("./app.js");

  // Si 1 EUR = 1.07 USD y 1 EUR = 156.5 JPY,
  // entonces 1 USD = (156.5 / 1.07) ≈ 146.26 JPY
  const yenes = fromDollarToYen(1);
  const expected = 156.5 / 1.07;

  expect(yenes).toBeCloseTo(expected); // usamos toBeCloseTo porque es decimal
});

test("One yen should be 0.00556 pounds", function () {
  const { fromYenToPound } = require("./app.js");

  // Si 1 EUR = 156.5 JPY y 1 EUR = 0.87 GBP,
  // entonces 1 JPY = 0.87 / 156.5 ≈ 0.00556 GBP
  const pounds = fromYenToPound(1);
  const expected = 0.87 / 156.5;

  expect(pounds).toBeCloseTo(expected); // también usamos toBeCloseTo
});
