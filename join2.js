

let arr=['m','n','s','i'];


console.log(arr.join());
//,
console.log(arr.join("*"));




let numbers=[1,[2,[3,4],5],6];

console.log(numbers.flat(2));

console.log(numbers.flat(1));



let fruits=['apple','banana','orange','mango'];

console.log(fruits.slice(1,3));

fruits.splice(1,2,'kel');
console.log(fruits);
