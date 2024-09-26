

let name="Mahesh-Ashok-Gavale";


console.log(name.split('A',10));


//split is used to split the given String into the array wiht the help of the seperator and the second
//parameter is the limit to which we have to seperate.
//if we take it as infinity it will return as an Empty Array.


let names="Mansisunilnibe";

console.log(names.split(""));
//if we pass the seperator as "" with no space then it will return the elements the form of th earray of the charatcers.


console.log(names.split("").map((c)=>
{
    if(c=='a'|| c=='e'|| c=='i')
    {
        
        return c;
    }
}));


console.log("The filter method at the work :");

console.log(names.split("").filter((c)=>
{ 

    if(c=='a'||c=='e'||c=='i')
    {
        
        return c;
      
    } 
}));
