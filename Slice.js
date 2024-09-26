


let numbers=[34,56,undefined,12,24,36,48,60,72];

let numbers2=numbers.slice(2,4);
//it include sthe starting index but not the ending index while copying the array.
//indices start  from the zero.
//if the starting is undefined then start index will be from zero.

console.log(numbers2);
//[undefined ,12]
// console.log(numbers[1]);
// console.log(numbers[0]);
console.log(numbers);


//keeps the original array as it is.
//does not modifies the original array with this method.
