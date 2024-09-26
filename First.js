

console.log("demo");

const arr=[1,23,45,65,77,88];


console.log(arr.find((number)=>
{
    if(number>40)
        return number;
        
}));


//the find method in js does return the single value but if we log then it will give us all the numbers 
//that passes the specific test or condition designed for it.