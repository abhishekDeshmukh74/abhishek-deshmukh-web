export const loopComparisonSnippet = `
const longArray = Array.from({ length: 10000000 }, (_, i) => i);

// For-of loop
console.time();
for (const value of longArray) {
  // Doing nothing
}
console.timeEnd();

// Basic for loop
console.time();
for (let i = 0; i < longArray.length; i++) {
  // Doing nothing
}
console.timeEnd();

// forEach loop
console.time();
longArray.forEach(element => {
  // Doing nothing
});
console.timeEnd();
`;

export const loopComparisonOutput = `
default: 332.089ms  // For-of loop
default: 28.555ms   // Basic for loop
default: 357.879ms  // forEach loop
`;

export const consoleGroupSnippet = `
console.log("This is the outer level");
console.group();
console.log("Level 2");
console.group();
console.log("Level 3");
console.warn("More of level 3");
console.groupEnd();
console.log("Back to level 2");
console.groupEnd();
console.log("Back to the outer level");
`;
