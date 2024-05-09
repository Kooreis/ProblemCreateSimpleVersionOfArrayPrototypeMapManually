```javascript
Array.prototype.myMap = function(callback) {
    let result = [];
    for(let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
};

// Test
let arr = [1, 2, 3, 4, 5];
let newArr = arr.myMap(function(num) {
    return num * 2;
});
console.log(newArr); // [2, 4, 6, 8, 10]
```