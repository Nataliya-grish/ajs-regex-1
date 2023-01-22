import Validator from "../app";

test("a-z 0-9 - _ symbols", () => {
  const username = "vas1l1y_ivan-off";
  expect(Validator.validateUsername(username)).toBeTruthy();
});

test("three digits", () => {
  const username = "vasiliy_666-off";
  expect(Validator.validateUsername(username)).toBeTruthy();
});

test.each([
  ["vas1l1y%ivan-off"],
  ["6vas1l1y_ivan-off"],
  ["vas1l1y_ivan-off3"],
  ["vas1l1y_ivan-off_"],
  ["vas1956_ivan-off"],
  ["_vas1l1y_ivan-off"],
  ["-vas1l1y_ivan-off"],
  ["vas1l1y_ivan-off-"],
])("incorrect spelling", (username) => {
  expect(Validator.validateUsername(username)).toBeFalsy();
});
