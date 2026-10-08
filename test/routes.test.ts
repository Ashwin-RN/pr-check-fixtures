import assert from "node:assert/strict";
import { test } from "node:test";
import { listRoutes } from "../src/routes.ts";

test("listRoutes names the health route", () => {
  assert.ok(listRoutes().includes("GET /health"));
});
