

let numbers=[1,3,5,7,9]
//use splice to add the missing numbers without deleting anything.

numbers.splice(1,4,2,3,4,5,6,7,8);
console.log(numbers);

let fruits=['apple','banana','mango','potato'];


let numbers2=fruits.toSpliced(2,0,'kel');
console.log(numbers2);
console.log(fruits);


//toSpliced is a copying version of the Splice.
//toSpliced does not modify the original array.
