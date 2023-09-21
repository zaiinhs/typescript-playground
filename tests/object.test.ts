import { TObject } from "../src/object";

describe("Object type", function () {
  it("should support in typescript object", function () {
    const person: TObject = {
      id: "1",
      name: "Zainal",
    };

    console.info(person);

    person.id = "2";
    person.name = "Abidin";
  });
});
