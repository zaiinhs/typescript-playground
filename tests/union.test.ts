describe("Union", function () {
  it("ini union type in typescript", function () {
    let sample: number | string | boolean;

    sample = "Zainal";
    sample = 12;
    sample = true;

    // boleh pilih type data mana yang mau dipakai
  });

  it("should support typeof operator", function () {
    function process(value: number | string | boolean) {
      if (typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value + 2;
      } else {
        return !value;
      }
    }

    expect(process("zainal")).toBe("ZAINAL");
    expect(process(98)).toBe(100);
    expect(process(true)).toBe(false);
  });
});
