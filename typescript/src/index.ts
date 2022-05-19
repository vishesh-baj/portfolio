// Basic Types
let id: number = 5;
let company: string = "Awesome";
let isPublished: boolean = true;
let x: any = "Sool";
x = false;

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, "two", false];

// tuple
let tuple: [number, string, boolean] = [1, "1", false];
// tuple array
let employee: [number, string][];
employee = [
  [1, "vishesh"],
  [2, "cool"],
  [3, "three"],
];

// union
let idz: string | number = 2;

// Enum
enum direction1 {
  Up,
  Down,
  Left,
  Right,
}

// Objects
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: " vishesh",
};

// Type Assertion
let cid: any = 1;
let customerId = <number>cid;

// Types in functions
function addSum(x: number, y: number): number {
  return x + y;
}

function log(message: string | number): void {
  console.log(message);
}

// Interface
interface UserInterface {
  // Can only read but not write
  readonly id: number | string;
  name: string;
  // age is potional when we put question mark
  age?: number;
}

const user1: UserInterface = {
  id: "23d",
  name: "Vishesh",
  age: 23,
};

// Interface with a function
interface MathFunc {
  (x: number, y: number): number;
}
const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

// Classes and interface
interface PersonInterface {
  // Can only read but not write
  id: number | string;
  name: string;
}

class Person implements PersonInterface {
  id: number;
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered`;
  }
}

// Subclasses in Typescript
class Employee extends Person {
  position: string;
  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const vishesh = new Person(1, "Vishesh");

// Generics 