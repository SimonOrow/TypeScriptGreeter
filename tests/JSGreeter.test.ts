import { JSGreeter } from "../src/models/JSGreeter";

describe("Greeter class", () => {
  test("the greeting property is properly set by the constructor", () => {
    const greeter = new JSGreeter("Hello");
    const greet = greeter.greet("Simon");
    expect(greet).toBe('console.log("Hello, Simon!")');
  });
});
