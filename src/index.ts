/**
 * npm i -g typescript
 * tsc --init // tsconfig.json
 * tsc
 */

/**
 * By default typescript transpile to ES5, that's why it converts
 * the let keyword to var keyword.
 */

/**
 * number, string, boolean, null, undefined, object
 * any, unknown, never, enum, tuple
 */

// let age: number = 20;

// if(age < 50)
//     age += 10;
// console.log(age);

// ===============================================================================

/**
 * We don't necessarly need to annotate the variables when we are assigning value at declaration moment.
 * and if you don't initialize it with any value, TypeScript assume it as `any`.
 */

// let sales: number = 123_456_789;
// let sales: number = 123_456_789;
// let course: string = 'TypeScirpt';
// let is_published: boolean = true;
// let level;

// function render(document: any) {
//     console.log(document);
// }

// ===============================================================================

// array of any
// let numbers = []

// array of numbers, your IDE will help you with intelisence, which TS provide that.
// let numbers:number[] = []
// numbers.forEach(n => n.<ctrl_space_here>)

// ===============================================================================

// tuple
// let user: [number, string] = [1, "Amin"];
// let user: [number, string] = [1, 'Amin', 2] // not valid, because you should have only 2 parameters as number and string respectively.
// user[0].<ctrl_space_here> // properties and methods related to numbers
// user[1].<ctrl_space_here> // properties and methods related to strings
// user.push(1) // bug in typescript

// tuples are good when we have only 2 values, more than th at it becomes hard to understand, what are they representing?
// let user2: [number, string, boolean, number] = [1, "Amin", true, 0];

// ===============================================================================

// Enums
// const small = 1;
// const medium = 2;
// const large = 3;

// PascalCase
// by default the compiler of the typescript assign the values by number, 0, 1, 2, ...
// Small = 0, Medium = 1, ..., and you can overwrite them like below, it starts from 1, then counting (Mediums is 2, ...)
// But if put strings as value, we should explicitly assign values to all of them.
// by putting const behind num, the compiler generates a lightweight code, give it a try! more optimized code by compiler.
// const enum SizeNumber {
//   Small = 1,
//   Medium,
//   Large,
// }

// let mySize: SizeNumber = SizeNumber.Medium;
// console.log(mySize);

// enum SizeLetter {
//   Small = "s",
//   Medium = "m",
//   Large = "l",
// }

// ===============================================================================

// Functions
// all functions should return a type, even void, annotate that specificly (that's good for apis)
// we just turned on the "noUnusedParameters" to true, this way we can check all unuesd parameters by ts compiler.
// function calculateTax(number) {
//   return 0;
// }

// JS always return undefined from our functions if we don't specify anything for it, and undefined is not a number.
// in tsconfig we change "noImplicitReturns" to true, to check if we are returning values even out of if statement here,
// function should return something.
// if you want to make a parameter optional, put ? after the annotaion, and there are 2 ways to supply it:
//  1- if ((taxYear || 2022) < 2022) ---> taxYear?: number
// //  2- taxYear = 2022 in parameter, now even this parameter becomes optional
// function calculateTax(income: number, taxYear = 2022): number {
//   //   let x; //  noUnusedLocals: true to check unused variables.
//   if (taxYear < 2022) return income * 1.2;
//   return income * 1.3;
// }

// calculateTax(10_000); // this works, because second parameter has default value.
// calculateTax(10_000, 2023); // overwrite default value.

// in vanilla js you can simply pass as many as arguments you want, but in ts it's not possible!
// calculateTax(10_000, 2022, 1);

// ===============================================================================

// Objects, are dynamic, so their shape can change through out the programs, like we can add another property to it later.
// let employee: {
//   readonly id: number; // freez/immutable a property of an object
//   name: string;
//   retire: (date: Date) => void;
// } = {
//   id: 1,
//   name: "Mosh",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };

// employee.id = 3; // typescript compiler prevents us from accidently modifying value of this property(readonly)

// ===============================================================================

// type aliases
// reuseable shape, DRY!
type Employee = {
  readonly id: number; // freez/immutable a property of an object
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: "Mosh",
  retire: (date: Date) => {
    console.log(date);
  },
};

// ===============================================================================

// Union Types
// use more thatn one type
function kgToLbs(weight: number | string): number {
  // weight.<ctrl_space_here> // compiler doesn't understand that it is number or string
  // we should use a technique here to find out > Norrowing
  if (typeof weight === "number") {
    // now the compiler knows that it is number, ctrl_space_here
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
}

// now we can call it in 2 separate ways.
kgToLbs(10);
kgToLbs("10kg");
