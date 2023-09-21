import { Employee, Manager } from "../src/employee";
import { Person, Seller } from "../src/interface";

describe("Interface", function () {
  it("should be Interface", function () {
    const seller: Seller = {
      id: 1,
      name: "Zainal",
      nib: "2139074",
      npwp: "344444",
    };
  });

  it("should support function interface", function () {
    interface AddFunction {
      (value1: number, value2: number): number;
    }

    const add: AddFunction = (value1: number, value2: number): number => {
      return value1 + value2;
    };

    expect(add(3, 4)).toBe(7);
  });

  it("should support indexable interface", function () {
    interface StringArray {
      [index: number]: string;
    }

    const names: StringArray = ["Zainal", "Abidin", "zain"];

    console.info(names);
  });

  it("should support indexable interface for non number index", function () {
    interface StringDictionary {
      [key: string]: string;
    }

    const dictionary: StringDictionary = {
      name: "Zainal",
      address: "Indonesia",
    };

    expect(dictionary["name"]).toBe("Zainal");
    expect(dictionary["address"]).toBe("Indonesia");
  });

  it("should support extends interface", function () {
    const employee: Employee = {
      id: "1",
      name: "Zainal",
      division: "IT",
    };

    console.info(employee);

    const manager: Manager = {
      id: "1",
      numberOfEmployees: 1,
      name: "Zainal",
      division: "IT",
    };

    console.info(manager);
  });

  it("should support function in interface", function () {
    const person: Person = {
      name: "Zainal",
      sayHello: function (name: string): string {
        return `Hello ${name}, my name is ${this.name}`;
      },
    };

    console.info(person.sayHello("Abidin"));
  });

  it("should support intersection types", function () {
    interface hasName {
      name: string;
    }

    interface hasId {
      id: string | number;
    }

    type Domain = hasId & hasName;

    const domain: Domain = {
      id: "1",
      name: "zain",
    };

    console.log(domain);
  });

  it("should support type assertions", function () {
    const person: any = {
      name: "zainal",
      age: 23,
    };

    const person2: Person = person as Person;

    console.log("asser", person2);
  });
});
