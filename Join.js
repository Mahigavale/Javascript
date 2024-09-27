

let arr=[1,2,3,4,5,6,7,8];
console.log(arr.join());

//if we don't specify the joner for the given array then it by default joins with the help of the Comma.
//it is just opposite of the join and does the exact opposite work.
console.log(arr.join("**"));




console.log(arr.reduce((total,n)=>
{
    return n+=total;
}));


let names=
[
    "Mahesh",
    "gavale",
    "Pune",
    "Omerga"
]



let obj=names.entries();
let m1=new Map();
for(const[i,v] of obj)
{
    console.log(i,v);
    
}

