describe("Function", function () {
  it("should support in function void typescript", function () {
    function sayHello(name: string): string {
      return `Hello ${name}`;
    }

    expect(sayHello("zain")).toBe("Hello zain");

    function printHello(name: string): void {
      console.log(`Hello ${name}`);
    }

    printHello("zain");
  });

  it("should support default value", function () {
    function sayHello(name: string = "Guest"): string {
      return `Hello ${name}`;
    }
    expect(sayHello()).toBe("Hello Guest");
    expect(sayHello("Zain")).toBe("Hello Zain");
  });

  it("should support rest parameter", function () {
    function sum(...values: number[]): number {
      let total = 0;

      for (const value of values) {
        total += value;
      }
      return total;
    }

    expect(sum(1, 2, 3, 4, 5)).toBe(15);
  });

  it("should support optional parameter", function () {
    function sayHello(firtName: string, lastName?: string): string {
      if (lastName) {
        return `Hello ${firtName} ${lastName}`;
      } else {
        return `Hello ${firtName}`;
      }
    }

    expect(sayHello("Zain")).toBe("Hello Zain");
    expect(sayHello("Zainal", "Abidin")).toBe("Hello Zainal Abidin");
  });

  it("should support function overloading", function () {
    function callMe(value: number): number;
    function callMe(value: string): string;
    function callMe(value: any): any {
      if (typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value * 10;
      }
    }

    expect(callMe(10)).toBe(100);
    expect(callMe("zain")).toBe("ZAIN");
  });

  it("should function as a parameter", function () {
    function sayHello(name: string, filter: (name: string) => string): string {
      return `Hello ${filter(name)}`;
    }

    function toUpper(name: string): string {
      return name.toUpperCase();
    }

    expect(sayHello("zain", toUpper)).toBe("Hello ZAIN");

    // Anonymous function
    expect(
      sayHello("zain", function (name: string): string {
        return name.toUpperCase();
      })
    ).toBe("Hello ZAIN");

    // Arrow function
    expect(sayHello("zain", (name: string): string => name.toUpperCase())).toBe(
      "Hello ZAIN"
    );
  });
});
