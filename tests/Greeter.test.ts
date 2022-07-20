import { Greeter } from "../src/models/Greeter";

describe("Greeter class", () => {
  test("the greeting property is properly set by the constructor", () => {
    const greeter = new Greeter("Hello");
    expect(greeter.greeting).toBe("Hello");
  });
  test("greet by name", () => {
    const greeter = new Greeter("Hello");
    const greet = greeter.greet("Simon");
    expect(greet).toBe("Hello, Simon!");
  });
});
