describe("If Statement", function () {
  it("should support if statement", function () {
    const examValue = 98;

    if (examValue > 80) {
      console.log("Good");
    } else if (examValue > 60) {
      console.log("Not Bad");
    } else {
      console.log("Try Again");
    }
  });

  it("should support ternary operator", function () {
    const value = 80;
    const say = value >= 75 ? "Congratulation" : "Try Again";
    console.log(say);
  });

  it("should support switch case", function () {
    function sayHello(name: string): string {
      switch (name) {
        case "Zainal":
          return "Hi Zainal";
        case "Abidin":
          return "Hi Abidin";
        default:
          return "Hello";
      }
    }

    console.log(sayHello("Zainal"));
    console.log(sayHello("Abidin"));
    console.log(sayHello("Zainal Abidin"));
  });
});
