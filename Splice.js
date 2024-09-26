

let numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
//1,2,-1,-2,-3,3,4,5,6,7,8,9,10,11,12,13,14,15


numbers.splice(1,0,-1,-2,-3);

console.log("the modified array of the JS:");


console.log(numbers);
//modifies the original array as it is modifying method in the JS.
//does not take the zeroth index as start index.
//takes three inputs as elements
//numbers.splice(starting_index,numbers_delete,add_new_numbers);



let numbers2=[10,30,50,70,90];
//10,20,30,40,50,60,70,80,90

numbers2.splice(1,3,20,30,40,50,60,70,80);
console.log(numbers2);
