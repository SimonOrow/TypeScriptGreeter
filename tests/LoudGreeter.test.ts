import { LoudGreeter } from "../src/models/LoudGreeter";

describe("Loud Greeter", () => {
  test("adding exlamation points", () => {
    const greeter: LoudGreeter = new LoudGreeter("Hello");
    expect(greeter.greet("Simon")).toBe("Hello, Simon!!");
  });
  test("adding exlamation points", () => {
    const greeter: LoudGreeter = new LoudGreeter("Hello");
    greeter.addVolume();
    greeter.addVolume();
    greeter.addVolume();
    greeter.addVolume();
    expect(greeter.greet("Simon")).toBe("Hello, Simon!!!!!!");
  });
});
