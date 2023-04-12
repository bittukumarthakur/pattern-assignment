const testing = require("../lib/testing.js");
const pattern = require("../src/pattern.js");

const displayTitle = testing.displayTitle;
const assert = testing.assert;
const columnPattern = pattern.columnPattern;

const columnPatternTest = function() {
  displayTitle(" Testing of column pattern .");

  assert(columnPattern("*", 0), "", "Column is 0.");
  assert(columnPattern("*", 1), "*", "Column is 1.");
  assert(columnPattern("*", 2), "**", "Column is size even.");
  assert(columnPattern("*", 3), "***", "Column is size odd.");
}

columnPatternTest();
