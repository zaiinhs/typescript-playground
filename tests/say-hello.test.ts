import { sayHello } from "../src/say-hello";

describe("sayHello", function (): void {
  it("should return hello zain", function (): void {
    expect(sayHello("zain")).toBe("Hello zain");
  });
});
