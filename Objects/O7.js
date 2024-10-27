

let names=
{
    name:"mahesh",
    email:"gavale07@gmail.com",
    mobile:"1234567890"
}

for(const[k,v] of Object.entries(names))
{
    console.log(`${k}:${v}`);
    
}

console.log(Object.getOwnPropertyNames(names));

//getOwnPropertyNames is used to get the names of the properties in the given object.
