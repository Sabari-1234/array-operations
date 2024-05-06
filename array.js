//push operation
let arr = [1, 2, 3];
arr.push(4);
console.log(arr);
//pop operation
let arr2 = [1, 2, 3];
let poppedElement = arr2.pop();
console.log(arr2);
console.log(poppedElement);

//splice operation
let arr3 = [1, 2, 3, 4, 5];
arr3.splice(2, 1);
console.log(arr3);

arr3.splice(1, 0, 6, 7);
console.log(arr3);
