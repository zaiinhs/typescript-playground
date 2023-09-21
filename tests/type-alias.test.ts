import { Category, Product } from "../src/type-alias";

describe("Type alias", function () {
  it("should support in typescript type alias", function () {
    const category: Category = {
      id: 1,
      name: "Handphone",
    };

    const product: Product = {
      id: "1",
      name: "Samsung",
      price: 12000000,
      category: category,
    };

    console.info(category);
    console.info(product);
  });
});
