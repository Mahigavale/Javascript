


let numbers=[1,2,3,[4,5,[6,10],7],8]

console.log(numbers.flat(Infinity));
console.log(numbers.flat(2));
//flat is used to flatten the array with the specific sub arrays.
//it takes array.flat(depth) : = the depth upto which we want to flatten the array.


let names=['mahesh',['ashok',['gavale']]]

console.log(names.flat(2));
console.log(names.flat(Infinity));

