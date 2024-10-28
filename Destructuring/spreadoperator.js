


let names1=[10,20,30,40,50];

let names2=[30,40,50,60];
console.log("merged array :");

let names3=[...names1,...names2];



console.log(names3);




let[a,...bc]=names1;
console.log(a);
console.log(bc);



let obj1={
    names:"mahesh"
}

let obj2={
    names:'mansi',
    age:25,
    email:"maheshgavale07@gmail.com",
    city:"Pune"
}

//if the objects share a common property then the later object property will override the 
//earlier one property of the Object. with it's values.
let obj3={...obj1,...obj2};
console.log(obj3);


let arr=[1,2,3]

function sum(a,b,c)
{
    console.log(a+b+c);
    
}


//we can use the spread operator to pass the array elements as an individual 
//element mapping the arguments for the given function.
sum(...arr);

