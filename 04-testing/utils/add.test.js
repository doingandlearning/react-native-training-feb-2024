import { add } from "./add";

describe("Add function happy path", () => {
  test("Adding positive is successful", () => {
    const result = add(1, 3);

    // Assert
    expect(result).toBe(4);
  });
});

describe("Add function unhappy path", () => {
  test("Passing non-numbers will throw an error", () => {
    // const result = add(true, []);

    expect(() => add(true, [])).toThrow();
  });
});
