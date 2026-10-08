import assert from "node:assert/strict";
import { test } from "node:test";
import { legacyFormat } from "../src/legacy.ts";

test("legacyFormat trims", () => {
  assert.equal(legacyFormat("  a "), "a");
});
