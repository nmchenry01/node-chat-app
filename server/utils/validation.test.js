const test = require("ava");

const { isRealString } = require("./validation");

test("Test isRealString Passing", t => {
  const testString = "Nicholas";
  t.true(isRealString(testString));
});

test("Test isRealString Failing", t => {
  const testString = "";
  const testStringSpaces = "    ";
  t.false(isRealString(testString));
  t.false(isRealString(testStringSpaces));
});

test("Test isRealString Failing with Non-String", t => {
  const testObj = {};
  const testNumber = 11;
  t.false(isRealString(testObj));
  t.false(isRealString(testNumber));
});
