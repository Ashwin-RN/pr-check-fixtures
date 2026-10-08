import assert from "node:assert/strict";
import { test } from "node:test";
import { legacyFormat, legacyTrim } from "../src/legacy.ts";

test("legacyFormat trims", () => {
  assert.equal(legacyFormat("  a "), "a");
});

test("legacyTrim trims", () => {
  assert.equal(legacyTrim(" b "), "b");
});
