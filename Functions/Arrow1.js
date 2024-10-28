

let arr=[10,11,12,13,14,15];

for(v of arr)
{
    console.log(v);
    
}


console.log(arr.map(n=>
{
    if (n>12)
    {
        return n;
    }
}
));


let sum=0;
const result=(...n)=>
{
    n.map((m)=>
    {
        if(m>10)
        {
console.log(m);

        }
    })
}
result(5,10,15,20,30,45,12,7,9);


const greet=()=>console.log("Hello");
//no params then no use of the parenthesis.

const greet2=(n)=>console.log(10+n);


    greet();

    greet();

    greet();

    greet2(15);
    greet2(30);