import assert from "node:assert/strict";
import { test } from "node:test";
import { format } from "../src/format.ts";

test("format works", () => {
  assert.equal(format(7), "0007");
});
