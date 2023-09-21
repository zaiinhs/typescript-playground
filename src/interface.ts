interface Laptop {
  id: number;
  type: string;
  speak: string;
}

let Asus: Laptop = {
  id: 1,
  type: "wrhirh3",
  speak: "16gb",
};

console.log(Asus);

export interface Seller {
  id: number;
  name: string;
  address?: string;
  readonly nib: string;
  readonly npwp: string;
}
