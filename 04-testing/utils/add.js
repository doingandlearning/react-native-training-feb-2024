export function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Must only use numbers.");
  }
  return a + b;
}
