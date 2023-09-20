// export class User {
//   public name: string;

//   constructor(name: string) {
//     this.name = name;
//   }
// }

// Cara cepat!f
export class User {
  constructor(public name: string, public age: number) {}
}

let user = new User("Zainal", 45);
console.log(user);

// public = bisa di akses disemua class atau di luar class
// protected = hanya bisa diakses di class tersebut, dan class turunan nya
// private = hanya bisa diakses class itu sendiri

class Admin extends User {
  write: boolean = true;
  read: boolean = true;

  getRole(): { read: boolean; write: boolean } {
    return {
      read: this.read,
      write: this.write,
    };
  }
}

let admin = new Admin("Zainal", 23);
console.log(admin);
