const timeWord = require("./timeWord");

describe("#timeword", () => {
  test("it is a function", () => {
    expect(typeof timeWord).toBe("function");
  });
  test("midnight", () => {
    expect(timeWord("00:00")).toBe("midnight");
  });
  test("noon", () => {
    expect(timeWord("12:00")).toBe("noon");
  });
  test("12:34", () => {
    expect(timeWord("12:34")).toBe("twelve thirty four pm");
  });
  test("02:07", () => {
    expect(timeWord("02:07")).toBe("two oh seven am");
  });
  test("15:00", () => {
    expect(timeWord("15:00")).toBe("three o'clock pm");
  });
});
