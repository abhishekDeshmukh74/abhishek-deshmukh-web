export const mapExample = `const heros =
[{ id: 1,  name: "Iron Man",   fullName: "Tony Stark",     publisher: "Marvel Comics" },
 { id: 2,  name: "Batman",     fullName: "Terry McGinnis", publisher: "DC Comics"     },
 { id: 3,  name: "Spider-Man", fullName: "Peter Parker",   publisher: "Marvel Comics" },
 { id: 4,  name: "Venom",      fullName: "Eddie Brock",    publisher: "Anti-Venom"    },
 { id: 5,  name: "Deadpool",   fullName: "Wade Wilson",    publisher: "Evil Deadpool" },
 { id: 6,  name: "Thanos",     fullName: "Tony Stark",     publisher: "Marvel Comics" },
 { id: 7,  name: "Thor",       fullName: "Thor Odinson",   publisher: "Marvel Comics" },
 { id: 8,  name: "Hulk",       fullName: "Bruce Banner",   publisher: "Marvel Comics" },
 { id: 9,  name: "Flash",      fullName: "Jay Garrick",    publisher: "DC Comics"     },
 { id: 10, name: "Wolverine",  fullName: "Logan",          publisher: "Marvel Comics" }];

const transformedHeros = heros.map((element) => {
    return {
        name: element.name,
        publisher: element.publisher,
        isFamous: true,
    }
});
console.log(transformedHeros);
// OUTPUT //
[{ name: 'Iron Man', publisher: 'Marvel Comics', isFamous: true },
 { name: 'Batman', publisher: 'DC Comics', isFamous: true },
 { name: 'Spider-Man', publisher: 'Marvel Comics', isFamous: true },
 { name: 'Venom', publisher: 'Anti-Venom', isFamous: true },
 { name: 'Deadpool', publisher: 'Evil Deadpool', isFamous: true },
 { name: 'Thanos', publisher: 'Marvel Comics', isFamous: true },
 { name: 'Thor', publisher: 'Marvel Comics', isFamous: true },
 { name: 'Hulk', publisher: 'Marvel Comics', isFamous: true },
 { name: 'Flash', publisher: 'DC Comics', isFamous: true },
 { name: 'Wolverine', publisher: 'Marvel Comics', isFamous: true }]`;

export const filterExample = `const heros =
 [{ id: 1,  name: "Iron Man",   fullName: "Tony Stark",     publisher: "Marvel Comics" },
  { id: 2,  name: "Batman",     fullName: "Terry McGinnis", publisher: "DC Comics"     },
  { id: 3,  name: "Spider-Man", fullName: "Peter Parker",   publisher: "Marvel Comics" },
  { id: 4,  name: "Venom",      fullName: "Eddie Brock",    publisher: "Anti-Venom"    },
  { id: 5,  name: "Deadpool",   fullName: "Wade Wilson",    publisher: "Evil Deadpool" },
  { id: 6,  name: "Thanos",     fullName: "Tony Stark",     publisher: "Marvel Comics" },
  { id: 7,  name: "Thor",       fullName: "Thor Odinson",   publisher: "Marvel Comics" },
  { id: 8,  name: "Hulk",       fullName: "Bruce Banner",   publisher: "Marvel Comics" },
  { id: 9,  name: "Flash",      fullName: "Jay Garrick",    publisher: "DC Comics"     },
  { id: 10, name: "Wolverine",  fullName: "Logan",          publisher: "Marvel Comics" }];

 // GET HEROS PUBLISHED BY MARVEL COMICS
 const transformedHeros = heros.filter((element) => {return  element.publisher === 'Marvel Comics'});
 console.log(transformedHeros);
 // OUTPUT //
[{ id: 1,  name: "Iron Man",   fullName: "Tony Stark",     publisher: "Marvel Comics" },
{ id: 3,  name: "Spider-Man", fullName: "Peter Parker",   publisher: "Marvel Comics" },
{ id: 6,  name: "Thanos",     fullName: "Tony Stark",     publisher: "Marvel Comics" },
{ id: 7,  name: "Thor",       fullName: "Thor Odinson",   publisher: "Marvel Comics" },
{ id: 8,  name: "Hulk",       fullName: "Bruce Banner",   publisher: "Marvel Comics" },
{ id: 10, name: "Wolverine",  fullName: "Logan",          publisher: "Marvel Comics" }]`;

export const reduceExample = `const numbers = [10, 7, 5];
// Sum of all array elements
const sum = numbers.reduce(
    (accumulator, currentValue) => {
        console.log('accumulator:', accumulator)
        return accumulator + currentValue;
    },
    0
)
console.log('sum:', sum)
// OUTPUT //
accumulator: 0
accumulator: 10
accumulator: 17
22`;

export const reduceRightExample = `const numbers = [10, 7, 5];

// Sum of all array elements
const sum = numbers.reduceRight(
    (accumulator, currentValue) => {
        console.log('accumulator:', accumulator)
        return accumulator + currentValue;
    },
    0
)
console.log('sum:', sum)

// OUTPUT //
accumulator: 0
accumulator: 5
accumulator: 12
sum: 22`;

export const includesExample = `const fruits = ["Banana", "Peach", "Apple", "Mango", "Orange"];

console.log(fruits.includes("Mango"));
// true
console.log(fruits.includes("Jackfruit"));
// false`;

export const concatExample = `const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];
console.log(num1.concat(num2, num3));
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(num1.concat(num3));
// [1, 2, 3, 7, 8, 9]`;

export const everyExample = `const numbers1 = [10, 0, -5, 8, 9];
// Check if every number in array is positive
console.log(numbers1.every((e) => e > 0))
// false

const numbers2 = [35, 50, 52, 48, 39];
// Check if every number in array is greater than 30
console.log(numbers2.every((e) => e > 30))
// true`;

export const someExample = `const numbers1 = [10, 0, -5, 8, 9];
// Check if some numbers in the array are negative
console.log(numbers1.some((e) => e < 0))
// true

const numbers2 = [35, 50, 52, 48, 39];
// Check if some numbers in the array are greater than 100
console.log(numbers2.some((e) => e > 100))
// false`;

export const sortExample = `const fruits = [ "Banana", "Peach", "Apple", "Mango", "Orange" ];

console.log(fruits.sort());
// [ 'Apple', 'Banana', 'Mango', 'Orange', 'Peach' ]

const numbers = [100, 1, 40, 5, 25, 10];
console.log(numbers.sort());
// [ 1, 10, 100, 25, 40, 5 ]

console.log(numbers.sort((a, b) => { return a - b }));
// [ 1, 5, 10, 25, 40, 100 ]`;

export const sliceExample = `const fruits = ["Banana", "Peach", "Apple", "Mango", "Orange"];
console.log(fruits.slice(2, 4));
// [ 'Apple', 'Mango' ]
console.log(fruits.slice(3));
// [ 'Mango', 'Orange' ]`;

export const spliceExample = `const fruits1 = ["Banana", "Peach", "Apple", "Mango", "Orange"];

// At position 2, add the new elements and remove 1 item

fruits1.splice(2, 1, "Lemon", "Kiwi");
console.log(fruits1)
// [ 'Banana', 'Peach', 'Lemon', 'Kiwi', 'Mango', 'Orange' ]

// At position 1, remove 2 elements

const fruits2 = ["Banana", "Peach", "Apple", "Mango", "Orange"];
fruits2.splice(1, 2);
console.log(fruits2)
// [ 'Banana', 'Mango', 'Orange' ]`;

export const popExample = `const animals = ['rat', 'cat', 'bat', 'snake', 'dog'];
console.log(animals.pop());
// "dog"
console.log(animals);
// [ 'rat', 'cat', 'bat', 'snake' ]`;

export const shiftExample = `const animals = ['rat', 'cat', 'bat', 'snake', 'dog'];
console.log(animals.shift());
// "rat"
console.log(animals);
// [ 'cat', 'bat', 'snake', 'dog' ]`;

export const pushExample = `const animals = ['rat', 'cat', 'bat', 'snake', 'dog'];
animals.push('bull');
console.log(animals);
// [ 'rat', 'cat', 'bat', 'snake', 'dog', 'bull' ]`;

export const unshiftExample = `const animals = ['rat', 'cat', 'bat', 'snake', 'dog'];
animals.unshift('bull');
console.log(animals);
// [ 'bull', 'rat', 'cat', 'bat', 'snake', 'dog' ];`;
