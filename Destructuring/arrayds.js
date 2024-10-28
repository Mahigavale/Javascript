


// (function demo(x,y)
// {

//     console.log(x+y);
    
//     console.log("named  iffe !");
    
// })(5,10);


// (function(a,b,c)
// {
//     console.log("demo");
//     console.log(a+b+c);
    
    
// })(10,20,30);



//iffe can be named as well as anonymous.
//it can be parameterized as well as non-parameterized.



let names=['mahesh','ashok','gavale'];

let[a,...s]=names;
console.log(a);
console.log(s);


let names2={
    name:"mahesh",
    email:"mgavale07@gmail.com",
    phone:"7774834341",
    city:"Pune",
    state:"maharashtra"
}


let {email,...rest}=names2;

console.log(email);
console.log(rest);


