

let numbers=[23,45,67,78,98,100,103,111];


let numbers2=numbers.map((n)=>
{
    return n+5;
})

console.log(numbers2);


let names=["Mahesh","Ashok","Pooja"]

let fullnames=names.map((nam)=>
{
    return nam+" gavale";
})
console.log(fullnames);
console.log(names);


//map returns an array in the js.
//it takes a function as an argument and returns the value in the format of the array only.
//does not modifies the original array in the js.
//iterating method in js.
//do ot fucking even if you don't like it doing .