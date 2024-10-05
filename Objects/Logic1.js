

let employees=[{
    emp_name:"mahesh",
    emp_age:34,
    emp_sal:1234.566,
    emp_dob:"12 nov 2002"

},{emp_name:"Pooja",
    emp_age:30,
    emp_sal:1234.566,
    emp_dob:"12 nov 1999"

},{
    emp_name:"Ashok",
    emp_age:60,
    emp_sal:123467.566,
    emp_dob:"10 oct 1965" 
},{
    emp_name:"Sachin",
    emp_age:27,
    emp_sal:123467.566,
    emp_dob:"12 nov 1984"
}]

employees.map((e)=>
{
    if(e.emp_age<50)
    {
        console.log(e.emp_name+ ":employee must be protected !");
        
    }
})

let senior_employees=employees.filter((e)=>
{
if(e.emp_age<50)
{
    return e;
}
})

console.log(senior_employees);
