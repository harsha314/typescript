function add(a: number, b: number): number {
    return a + b;
}

function subtract(a: number, b: number): number {
    return a - b;
}

console.log("Index.js executed");

// function absolute(a: number): number {
//     return a > 0 ? a : -a;
// }
abstract class Res {
    constructor(public status: 200 | 400 | 500) {}
    method() {}
}
