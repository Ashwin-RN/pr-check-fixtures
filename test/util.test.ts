import assert from "node:assert/strict";
import { test } from "node:test";
import { clamp } from "../src/util.ts";

test("clamp keeps a number inside the range", () => {
  assert.equal(clamp(5, 0, 3), 3);
  assert.equal(clamp(-1, 0, 3), 0);
});
