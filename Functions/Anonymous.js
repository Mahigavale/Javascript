//no function name.

demo();
//hoisting 
//1) assigning to variable.
const names= function()
{
    return "mahesh";
}
console.log(names());

//passing as an argument

let numbers=[10,20,30,40,50];
//map,filter,foreach




console.log(numbers.map((n)=>
{
    return n*2;
}));


console.log(numbers.filter((n)=>
{
    if(n>20)
    {
        return n;
    }
}));

numbers.forEach((n)=>
{
    console.log(n*2);
    
})

console.log("normal anonymous ");


console.log(numbers.map(function(n)
{
    return n *2;
}))



function demo()
{
    console.log("hello wolrd !");
    
}




(function()
{
    console.log("immediate");
    
})();





(function()
{
    console.log("immediately invoked function");
    
})();