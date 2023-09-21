describe("Any", function () {
  it("should be typescript", function () {
    const person: any = {
      name: "Zainal Abidin",
      age: 23,
      addres: "Kraksaan",
    };

    person.addres = "tongas";

    console.log(person);
  });
});
