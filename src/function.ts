function getName(): string {
  return "Zainal";
}

function printName(): void {
  console.log("Zainal Abidin");
}

function multiple(val1: number, val2: number): number {
  return val1 * val2;
}
const result = multiple(2, 5);
// console.log(result);

//function as type
type Multiple = (val1: number, val2: number) => number;

const Add: Multiple = (val1: number, val2: number): number => {
  let result = val1 + val2;
  return result;
};

//default parameter
// const fullname = (firstName: string, lastName: string = "Abidin"): string => {
//   return `${firstName} ${lastName}`;
// };

//optional parameter
const fullname = (firstName: string, lastName?: string): string => {
  return `${firstName} ${lastName}`;
};
console.log(fullname("Zainal"));
