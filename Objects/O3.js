let profile=
{
    nam:"mahesh",
    moile:"777777777",
    email:"mahesh@.com",
    city:"pune",
    pinocde:"232345",
    subd:"Lohara",
    exp:"2.5 years",
    dob:"11/11/99",
    returnemail:function()
    {
        return this.email;
    }
}

let str=profile.returnemail();
if(str.includes("@gmail.com"))
{
    console.log("valid email");
    
}
else{
    console.log("invalid email");
    
}



let profile2=Object.create(profile);
profile2.nam="mns",
profile2.moile="76676565"
profile2.ismarried="true"
profile2.email="sdhjkk";
console.log(profile2);
