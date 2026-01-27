function sum(a,b)
{
    return a+b;
}
console.log(sum(2,3));

function evenOrOdd(num)
{
    if(num%2==0)
    {
        return "Even";
    }               
    else
    {
        return "Odd";
    }   
}
console.log(evenOrOdd(5));

let arr = [1,2,3,4,5];
let sum1 = 0;
for(let i=0;i<arr.length;i++)
{
    sum1 = arr[i] + sum1;
}   

console.log("Sum of array elements: " + sum1);


const fun = () =>{
    return "Arrow Function Example";
}
console.log(fun());


const funsum =(a=10,b=20)=>{
    return a+b;
}
console.log(funsum());
console.log(funsum(5,15));
console.log(funsum(7));

const funcal = (a,b,mul)=>{
    return mul(a,b);
}
console.log(funcal(5,10,mul));

function mul(x,y)
{
    return x*y;
}

console.log("start");
function showmsg(msg,callback){
    setTimeout(() => {
        console.log("Hello",msg);
        callback();
    }, 1000);
}
showmsg("surya", ()=>{
    console.log("Callback executed after message shown");
});
console.log("end");