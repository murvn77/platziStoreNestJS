// Recapitulando en TypeScript --> TIPADO
const myName = 'Mauren';
const myAge = 12;
const suma = (a: number, b: number) => {
  return a + b;
};
suma(12, 23);

class Person {
  // private age;
  // private name;
  // constructor(age: number, name: string) {
  //   this.age = age;
  //   this.name = name;
  // }

  //El equivalente de lo anterior para crear un constructor más simple es:

  constructor(private age: number, private name: string) {}

  getSymmary() {
    return `My name is ${this.name}, ${this.age}`;
  }
}

const mauren = new Person(19, 'Mauren');
mauren.getSymmary();
