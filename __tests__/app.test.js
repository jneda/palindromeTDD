const app = require("../app.js");

describe("palindrome", () => {
  it("devrait être un palindrome", () => {
    expect(app.estPalindrome("kayak")).toEqual(true);
  });
  it("ne devrait pas être un palindrome", () => {
    expect(app.estPalindrome("toto")).toEqual(false);
  });
  it("devrait être un palindrome", () => {
    expect(app.estPalindrome("karine alla en irak")).toEqual(true);
  });
});