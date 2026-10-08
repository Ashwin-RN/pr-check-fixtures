import assert from "node:assert/strict";
import { test } from "node:test";
import { authHeader } from "../src/config.ts";

test("authHeader works", () => {
  assert.equal(authHeader().startsWith("Bearer "), true);
});
