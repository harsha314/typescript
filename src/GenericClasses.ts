interface Backpack<Type> {
    add: (obj: Type) => void;
    get: () => Type;
}

interface MySet<Type> {
    add: (x: Type) => void;
    isPresent: (x: Type) => boolean;
    remove: (x: Type) => void;
}

class ListSet<Type> implements MySet<Type> {
    private nums = new Array<Type>();

    add(x: Type) {
        if (this.nums.indexOf(x) === -1) {
            this.nums.push(x);
        }
    }

    isPresent(x: Type) {
        return this.nums.indexOf(x) === -1;
    }

    remove(x: Type) {
        let index = this.nums.indexOf(x);
        if (index !== -1) {
            this.nums.splice(index, 1);
        }
    }
}
