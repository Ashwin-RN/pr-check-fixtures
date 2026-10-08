import assert from "node:assert/strict";
import { test } from "node:test";
import { describe } from "../src/describe.ts";

test("describe works", () => {
  assert.equal(describe("ok"), "OK");
});
