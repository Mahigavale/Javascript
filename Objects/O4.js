
let profile={
    names:"mahesh",
    email:"maheshgavale07@gmail.com",
    mobile:"7774834341"
}

Object.defineProperty(profile,'dob',{
    value:"11/11/11",
    writable:false,  //can over write
    enumerable:true,  //for in 
    configurable:false //can we delete or not.
});

//defineproperty() gives us better access at writing the properties and 
//managing their behaviour.

profile.dob="22/22/22"

console.log(delete profile.dob);
console.log(profile);
