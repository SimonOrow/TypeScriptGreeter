import { Greeter } from "../models/Greeter";

class JSGreeter extends Greeter {
  constructor(greeting: string) {
    super(greeting);
  }
  greet(name: string): string {
    return `console.log("${this.greeting}, ${name}!")`;
  }
}

export { JSGreeter };
