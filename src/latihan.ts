// interface CatInfo {
//   age: number;
//   breed: string;
// }

// type CatName = "miffy" | "boris" | "mordred";

// const cats: Record<CatName, CatInfo> = {
//   miffy: { age: 10, breed: "Persian" },
//   boris: { age: 5, breed: "Maine Coon" },
//   mordred: { age: 16, breed: "British Shorthair" },
// };

// console.log(cats.mordred);

// Intersection typescript
interface Book {
  book_id: number;
  book_name: string;
}

interface Author {
  author_id: number;
  author_name: string;
}

type intersected_type = Book & Author;

let intersected_type_object1: intersected_type = {
  book_id: 101,
  book_name: "Typescript is Awesome",
  author_id: 202,
  author_name: "Tutorialspoint!",
};

console.log("Book Id: " + intersected_type_object1.book_id);
console.log("Book name: " + intersected_type_object1.book_name);
console.log("Author Id: " + intersected_type_object1.author_id);
console.log("Author name: " + intersected_type_object1.author_name);
