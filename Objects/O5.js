

let profile = {
    name: "mahesh"
}

Object.defineProperties(profile, {
    "email":
        { value: "mansijsijj", writable: true, configurable: false ,enumerable:true }
    , "mobile": {
        value: "89879988", writable: true, configurable: false, enumerable:false

    }
})
console.log(profile);


//whenever we set the descriptor attribute of a property to enumerable false it
//won't be logged in the console.
//or we can't access it using the for in loop or key 
//we can directly access it with the help of the direct access

//enumerable false will be accessed directly with the help of the direct access property.
console.log(profile.mobile);

//what must be the reason for it ?