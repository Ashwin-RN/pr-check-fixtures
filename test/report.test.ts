import assert from "node:assert/strict";
import { test } from "node:test";
import { report } from "../src/report.ts";

test("report works", () => {
  assert.equal(report(["a", "b"]), "a\nb");
});
