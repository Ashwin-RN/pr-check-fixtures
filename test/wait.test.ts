import assert from "node:assert/strict";
import { test } from "node:test";
import { wait } from "../src/wait.ts";

test("wait resolves", async () => {
  assert.equal(await wait(1), undefined);
});
