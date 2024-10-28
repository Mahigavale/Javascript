


function sum(n1,n2,...r)
{
    return n1+n2+r.reduce((c,n)=>c+n);
}

console.log(sum(10,20,30,40,50));



let demo=[10,11,12,13,14,15];

let [a,b,...n]=demo;
//array 

console.log("first:",a);
console.log("second:",b);
console.log("rest of the params:",...n);




let user={
    name:"mahesh",
    email:"maheshgavale07@gmail.com",
    mobile:"7774834341",
    dob:"11/11/11"
}

let {name,...details}=user;
console.log(name);
console.log(details);



let arrr=[10,20,30,40,50];

let [first,...rest]=arrr;
console.log(first);
console.log(rest);


let obj1={
    name1:"ab",
    age1:23,
    email1:"mahi@gmail.com",
    place1:"Pune"
}

let obj2=
{
    name:"bc",
    age:24,
    email:"mahesh07@gmail.com",
    place:"mumbai"
}

let merged={...obj1,...obj2};
// we can use this operator to merge the two objects.
//if they have the same property names then the second property names will override 
//the first property oject properties.

console.log("merged ::");

console.log(merged);
