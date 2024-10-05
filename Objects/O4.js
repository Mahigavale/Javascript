
let profile={
    names:"mahesh",
    email:"maheshgavale07@gmail.com",
    mobile:"7774834341"
}



Object.defineProperty(profile,'dob',{
    value:"11/11/11",
    writable:false,  //can  we over write.
    enumerable:true,  //for in access.
    configurable:false //can we delete or not.
});

//defineproperty() gives us better access at writing the properties and 
//managing their behaviour.

//a simple property creation with the dot operator would give us the addition of property but
//not the desired behaviour and better control over the property behaviour
//so always use the define property if you want a better access to property.

profile.dob="22/22/22"

console.log(delete profile.dob);
console.log(profile);


Object.defineProperties(profile,{pincode:{
    value:"232323",
    writable:false,
    configurable:false,
    enumerable:true
},ismarried:{
    value:true,
    writable:false,
    enumerable:true
}})

for(let v in profile)
{
    console.log(profile[v]);
    
}