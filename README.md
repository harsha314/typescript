# Typescript

-   Typescript is a superset of javascript

-   `npx tsc index.ts` command compiles to `index.js`
<!-- - `npx tsc index.ts -o <file>.js` command compilers to `<file>.js` -->

### Primitives

### Arrays , Tuples & Objects

```ts
let arr: number[] = [1, 2, 3, 4, 5];

let tuple: [number, string, number] = [];
```

### Type Inference

-   Typescript determines type if a variable is initialized

```ts
let a = "hello there";
let b: string = "hello there"; // This is Redundant
```

### Union Types

```ts
let A: string | number = "hello";
A = 2;
```

### Type Aliases

```ts
// Custom Types
type Person = {
    name: string;
    birthYear: number;
    getAge(): number;
};
```

### Function Types

```ts
function add(a: number, b: number): number {
    return a + b;
}

function doNothing(): void {
    console.log("do nothing");
}

let doNothing_arrow = (): void {
    console.log("do nothing");
}
```

### Generic Functions

```ts
function insertAtBack<T>(array: T[], val: T): void {
    array.push(val);
}
```

```ts
let insertAtBack = <T,>(array: T[], val: T): void {
    array.push(val);
}
```

-   Generic Arrow Functions with single type place a comma to differentitate it from tsx, even though the code works without comma

### Classes

```ts
class Person {
    name: string;
    readonly birthYear: number;
    constructor(name: string, birthYear: number) {
        this.name = name;
        this.birthYear = birthYear;
    }
}
```

```ts
class Person {
    constructor(public name: string, readonly birthYear: number) {}
}
```

-   Above two class definitions produce the same javascript

```ts
class Student extends Person {
    constructor(name: string, birthYear: number, private courses: string[]) {
        super(name, birthYear);
    }
}

let harsha = new Student("harsha", 2001, ["Angular"]);
```

-   Classes can only extend 1 class

#### Abstract Classes

### Interfaces

```ts
interface Person {
    name: string;
    birthYear: number;
    getAge(): number;
}

let max: Person = {
    name: "max",
    birthYear: 1990,
    getAge(): number {
        return 0;
    },
};
```

```ts
class Student implements Person {
    constructor(
        public name: string,
        public birthYear: number,
        private courses: string[]
    ) {}
    getAge(): number {
        return 0;
    }
}
```

-   Interfaces can be reopened so that they can have new member data

```ts
interface Person {
    name: string;
    birthYear: number;
    getAge(): number;
}

interface Person {
    email: string;
}
```

### Generic Classes

```ts
class MySet<T> {
    items: Array<T>;

    constructor() {}

    public add(item: T): void {}

    public isPresent(item: T): boolean {
        return this.items.findIndex((v) => v === item) !== -1;
    }

    public size(): number {
        return this.items.length;
    }
}
```

### Type Narrowing

```ts
type ErrorRes = { status: 400; error: string };

type Res = { status: 200; data: string } | ErrorRes;

function isErrorResponse(obj: Res): obj is ErrorRes {
    return obj.status === 400;
}

function doSomething(res: Res) {
    if (isErrorResponse(res)) {
        res.status;
    }
}
```

```ts
abstract class Res {
    constructor(public status: 200 | 400 | 500) {}
}
class ErrorRes extends Res {
    constructor(public status: 400, public error: string) {
        super(status);
    }
}
class SuccessRes extends Res {
    constructor(public status: 200, public body: string) {
        super(status);
    }
}

function isErrorResponse(obj: Res): obj is ErrorRes {
    return obj instanceof ErrorRes;
}

function doSomething(res: Res) {
    if (isErrorResponse(res)) {
        res.status;
    }
}
```

### Decorators

### Elvis operator

```typescript
interface User {
    username?: string;
}

let nullUser: User = {};

console.log(nullUser?.username);
```

### null coalescing operator

The double question mark operator (??) is known as the nullish coalescing operator in TypeScript. It provides a way to provide a default value when working with null or undefined values.

```typescript
const value1 = null ?? "Default Value";
console.log(value1); // Output: "Default Value"

const value2 = undefined ?? "Default Value";
console.log(value2); // Output: "Default Value"

const value3 = 0 ?? "Default Value";
console.log(value3); // Output: 0

const value4 = false ?? "Default Value";
console.log(value4); // Output: false

const value5 = "" ?? "Default Value";
console.log(value5); // Output: ""

const value6 = "Hello" ?? "Default Value";
console.log(value6); // Output: "Hello"
```
