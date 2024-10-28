


console.log("start");

const timeout=setTimeout(()=>{

    console.log("after two seconds.");
    
},2000)


setTimeout(()=>
{
clearTimeout(timeout);
console.log("settimeout cleared !");

},3000)

console.log("end");


const demo=setInterval(()=>
{
console.log("arr");

},2000)

clearInterval(demo);