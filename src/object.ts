export type TObject = {
  id: string;
  name: string;
  description?: string;
};

type Data = {
  id: number;
  name: string;
};

let age: Data = {
  id: 23,
  name: "zain",
};

console.log(age);
