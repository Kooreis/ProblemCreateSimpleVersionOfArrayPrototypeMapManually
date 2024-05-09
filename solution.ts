Here is a simple TypeScript console application that creates a manual version of Array.prototype.map:

```typescript
class MyArray<T> {
    private arr: T[];

    constructor(arr: T[]) {
        this.arr = arr;
    }

    myMap<U>(callback: (value: T, index: number, array: T[]) => U): U[] {
        let result: U[] = [];
        for (let i = 0; i < this.arr.length; i++) {
            result.push(callback(this.arr[i], i, this.arr));
        }
        return result;
    }
}

let arr = new MyArray<number>([1, 2, 3, 4, 5]);
let newArr = arr.myMap((value, index, array) => {
    return value * 2;
});

console.log(newArr);
```

In this code, we define a class `MyArray` that takes an array as a constructor argument. We then define a method `myMap` that takes a callback function as an argument. This callback function is applied to each element in the array, and the results are stored in a new array, which is then returned. Finally, we create an instance of `MyArray`, apply `myMap` to it with a callback that doubles each element, and log the result.