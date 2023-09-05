import test from "node:test";
import assert from "node:assert";
import { promisify } from "node:util";

test("Hero integration test", async (t) => {
  const testPORT = 9009;
  process.env.PORT = testPORT;

  const { server } = await import("../../../src/index.js"); // dynamic import

  const testServerAddress = `http://localhost:${testPORT}/heroes`;

  await t.test("It should create hero", async (t) => {
    const data = {
      name: "ranjan",
      age: 29,
      power: "Rich",
    };

    const request = await fetch(testServerAddress, {
      method: "POST",
      body: JSON.stringify(data),
    });

    // CHECK headers are correct
    assert.deepStrictEqual(
      request.headers.get("content-type"),
      "application/json"
    );

    assert.strictEqual(request.status, 201);

    const result = await request.json();
    assert.deepStrictEqual(
      result.success,
      "User created successfully",
      "It should return a valid message"
    );

    assert.ok(result.id.length > 30, "It should be a valid UUID");
  });

  await promisify(server.close.bind(server))();
});
