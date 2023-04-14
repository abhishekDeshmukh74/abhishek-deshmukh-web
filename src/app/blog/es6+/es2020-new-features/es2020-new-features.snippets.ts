export const utilities = `export const multiply = (num1, num2) => num1 * num2;`;

export const index = `async calculate(num1, num2) => {
    if (num1 && num2) {
        const math = await import('./utilities.js');
        console.log(math.multiply(5, 10));
    }
};
calculate(4, 2);`;

export const allSettledExample = `const p1 = new Promise((resolve, reject) => setTimeout(resolve, 1000));
const p2 = new Promise((resolve, reject) => setTimeout(reject, 1000));
Promise.allSettled([p1, p2]).then(data => console.log(data));
// [
//   Object { status: "fulfilled", value: undefined},
//   Object { status: "rejected", reason: undefined}
// ]`;
