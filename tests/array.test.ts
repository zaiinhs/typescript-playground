describe("Array", function () {
  it("should array", function () {
    const names: string[] = ["zain", "abidin", "zainal"];
    const values: number[] = [1, 2, 3, 4, 5];
  });

  it("should support readonly array", function () {
    const hobbies: ReadonlyArray<string> = ["Membaca", "Menulis"];
  });

  it("should support tuple", function () {
    const person: readonly [string, string, number] = ["zainl", "abidin", 23];
  });
});
