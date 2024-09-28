

let numbers=[10,20,30,40,50,60,70,80,90,100];


console.log(numbers.copyWithin(1,0,3));
// 1=> target index to where we have to copy.
//0=> from whic index we are going to copy.
//3=>ending index we are going to copy.
//modifies the original array.
console.log(numbers);

let fruits=['apple','banana','choco','demo','epo'];
// apple banana apple banana epo

//console.log(fruits.copyWithin(2,0,2));
console.log(fruits.copyWithin(0,2,4));
