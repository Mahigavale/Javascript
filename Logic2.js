

let students=[
    {
        name:"Saddam",
        email:"Saddam@gmail.com",
        mobile:"8989898989",
        mobilelength:function()
        {
            return this.mobile.length;
        }
    },
    {
        name:"Muddam",
        email:"Muddam@gmail.com",
        mobile:"77777777",
        mobilelength:function()
        {
            return this.mobile.length;
        }
    },
    {
        name:"Saddam",
        email:"Giddam@gmail.com",
        mobile:"555555555",
        mobilelength:function()
        {
            return this.mobile.length;
        }
    }
]

console.log(students.map((e)=>
{

    console.log(e.mobilelength());
    
    if(e.mobilelength()==10)
    {
        
        
        return e;
        
    }
}));


console.log("The filter method dowwards :");

console.log(students.filter((e)=>
{
    if(e.mobilelength()==10)
    {
        return e;
    }
}))