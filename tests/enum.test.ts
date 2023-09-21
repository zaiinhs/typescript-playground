import { Customer, CustomerType } from "../src/enum";

describe("Enum", function () {
  it("should be typescript enum", function () {
    const customer: Customer = {
      id: 1,
      name: "Zainal",
      type: CustomerType.PLAT,
    };

    console.info(customer);
  });
});
