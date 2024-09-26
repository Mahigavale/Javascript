

let numbers=[12,34,56,68,89];


console.log(numbers.map((n)=>
{
    if(n%2==0)
    {
        return n;
    }
}));


console.log(numbers.filter((n)=>
{
    if(n%2==0)
    {
        return n;
    }
}));

//the only difeference between map and filter is that the map function returns the result
//equvilant to the original length of the array no matter the condition result.
//that is even if the result is false or unsatisfied it will return the undefined value for the same.
//the filter does what is that it modifies the length of th array and returns only those values which are 
//following the cindition and are true for that specific condition.
//it modifes the actual length of the array output.
//when you want to have only those elements which are satisfying the given condition then use filter.


console.log(numbers);


