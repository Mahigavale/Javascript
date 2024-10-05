
//1)Object.entries gives us the iterable object of the given object's keys and values
//we must iterate over them with the help of the for in or any loop in that matter
//we can access them using the placeholders and use them accordingly.


let emp={
    emp_name:"john doe",
    emp_email:"johndoe@gmail.com",
    emp_doj:"12-12-12",
    emp_desg:"Manager"
}

for(let[k,v] of Object.entries(emp))
{
    console.log(`${k}:${v}`);
    
}





let Student=[{
    names:"anant",
    age:34,
    email:"anant@gmail.com",
    dob:"12-12-12"
}]

for(const[k,v] of Object.entries(Student))
{
    console.log(`${k}:${v}`);
    
}

    
    
