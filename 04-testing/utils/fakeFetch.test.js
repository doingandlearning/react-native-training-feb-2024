import { fakeFetch } from "./fakeFetch";

describe("fakeFetch happy patch", () => {
  test("goog;e works", async () => {
    const result = await fakeFetch("https://google.com");

    expect(Buffer.isBuffer(result)).toBe(true);
    console.log(result);
  });
});

describe("fakeFetch unhappy patch", () => {
  xtest("errors", async () => {
    // const result =;

    expect(() => fakeFetch("http://error.com")).rejects.toStrictEqual(
      Error("network error")
    );
    console.log(result);
  });
});
