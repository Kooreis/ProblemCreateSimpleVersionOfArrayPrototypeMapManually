# Question: How do you create a simple version of Array.prototype.map manually? JavaScript Summary

The provided JavaScript code creates a simplified version of the Array.prototype.map function. This function, named 'myMap', is added to the Array prototype, making it available to all arrays. The 'myMap' function accepts a callback function as an argument, which is applied to each element in the array. The function creates an empty array, 'result', and then iterates over the array on which it was called using a for loop. For each iteration, it applies the callback function to the current element, and pushes the result into the 'result' array. The callback function can modify the current element, and it receives three arguments: the current element, its index, and the original array. After iterating over all elements, the 'myMap' function returns the 'result' array, which contains the results of applying the callback function to each element. The test code demonstrates this by doubling each number in the array 'arr', resulting in the array [2, 4, 6, 8, 10].

---

# TypeScript Differences

The TypeScript version of the solution is similar to the JavaScript version in terms of logic and functionality. Both versions create a new method that mimics the behavior of the built-in Array.prototype.map method, which applies a provided function to each element in an array and returns a new array with the results.

However, there are some differences due to the nature of TypeScript:

1. TypeScript uses static types: In the TypeScript version, the `MyArray` class is a generic class that takes a type parameter `T`. This means that the array can hold elements of any type, but all elements must be of the same type. The `myMap` method also takes a type parameter `U`, which represents the type of elements in the resulting array.

2. TypeScript uses classes: While the JavaScript version extends the built-in Array prototype, the TypeScript version defines a new class `MyArray`. This class has a private property `arr` that holds the array, and a method `myMap` that implements the map functionality.

3. TypeScript uses arrow functions: In the TypeScript version, the callback function in the `myMap` method is an arrow function, which has a shorter syntax and does not have its own `this` value. This is not a TypeScript-specific feature, but it is more commonly used in TypeScript than in JavaScript.

4. TypeScript uses explicit return types: The `myMap` method in the TypeScript version has an explicit return type `U[]`, which means it returns an array of elements of type `U`. This is not possible in JavaScript, which is dynamically typed.

Overall, the TypeScript version provides more type safety and is more object-oriented than the JavaScript version.

---

# C++ Differences

The C++ version of the problem solution uses a standalone function named `map` that takes a vector and a function as arguments, applies the function to each element of the vector, and returns a new vector with the results. The JavaScript version, on the other hand, adds a new method to the Array prototype, allowing any array to call this method directly.

In terms of language features, the C++ version uses templates to allow the `map` function to work with vectors of any type. It also uses the `std::function` class template to accept any callable target (like a function or a lambda) that can take an argument of the specified type and return a value of the same type.

The JavaScript version uses a callback function, which is a common pattern in JavaScript for providing a function that should be called at a later time. This callback is invoked for each element in the array, and its return value is added to the result array.

The C++ version uses a range-based for loop to iterate over the elements in the array, which is a feature not available in JavaScript. The JavaScript version uses a traditional for loop, which requires manually accessing each element of the array by its index.

Finally, the C++ version uses `std::cout` to print the results, while the JavaScript version uses `console.log`. These are equivalent operations in their respective languages.

---
