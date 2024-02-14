export async function fakeFetch(url) {
  await new Promise((resolve) => setTimeout(() => resolve(), 10));
  if (url === "http://error.com") {
    throw new Error("network error");
  }
  return Buffer.from("some data");
}
