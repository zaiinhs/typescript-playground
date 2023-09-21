// sebuah typedata yang menyimpan data constant

//numeric enum
// enum Month {
//   JAN,
//   FEB,
//   MAR,
//   APR,
//   MAY,
// }

//string enum
enum Month {
  JAN = "Januari",
  FEB = "Februari",
  MAR = "Maret",
  APR = "April",
  MAY = "Mei",
}

console.log(Month.JAN);

export enum CustomerType {
  REG = "REGULAR",
  GLD = "GOLD",
  PLAT = "PLATINUM",
}

export type Customer = {
  id: number;
  name: string;
  type: CustomerType;
};
