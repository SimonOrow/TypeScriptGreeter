import { HtmlGreeter } from "../src/models/HtmlGreeter";

describe("html greeter", () => {
  test("adding h1", () => {
    const greeter: HtmlGreeter = new HtmlGreeter("Hello");
    expect(greeter.greet("JoeJack")).toBe("<h1>Hello, JoeJack!</h1>");
  });
});
