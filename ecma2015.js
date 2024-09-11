import fetch from "node-fetch";


//array destructuring

const a =[10,20,30];


const [b,c,d] = a;

console.log(b,c,d)
const [,,z]= a;

console.log(z);



//swap x y withouth 3rd variable

var x=10;
var y=20;

 [x,y]=[y,x];

console.log(x,y);


///spread ... 


const h = [10,20,30];

const i = [...h];

console.log(i);

h.push(...['guave']);
console.log(h);


const r = 'india';
console.log([...r])


//rest paramter
const sum = (...numbers)=>{
return numbers.reduce((accumulator, currval)=> (accumulator = accumulator+currval),10)
}


console.log(sum(1,2,3,2,1,1));


// ?? nullish operator gives right side value if left one is not undefined or null

let hu = 0;
let rg = hu|| 67;
let hn = hu && 90; // opposite of ||

let gy = hu ?? 67;

console.log(rg,hn,gy);




//higher order function and callback function


const greeting = (name,callback)=>{
   
           callback(name);
           console.log(name);

 
}


const exec = (name)=>{
console.log(`callbacdk`,name);

}

greeting('srijan',exec);


//here greeting is higher order function as it is taking a function as an arguement
// and exec is callback function as it is an argument in another function



//promises




const pr = new Promise((resolve,reject)=>{

setTimeout(()=>{
    resolve("missed")
},2000);

// reject('i cant');

});



pr.then((res)=>
{console.log(res)}
)
.catch((rej)=>
{
    console.log(rej);}
)
.finally((fin)=>
{console.log("finally block always executes");}
)



//priomises example


const admission = ((student)=>{

return  new Promise((resolve,reject)=>{
    if(student === 'srijan')

resolve(`enlorrment for ${student}  successfull`);


else
reject(`not enrolled ${student}`);

})


})



 admission ('srijan si').then((res)=>{
    console.log(res);
 }).catch((rej)=>{
    console.log(rej);
 }).finally(()=>{
    console.log('process completed')
 }); 


const api = 'https://jsonplaceholder.typicode.com/todos/1'
//  const jn =()=>{
//   fetch(api).then((res)=>{
//  return res.json();
//  }).then((res)=>{console.log(res)}).catch((rej)=>{
//     console.log(rej);
//  });
//  }


//  jn();


//async await with try catch finally

 async function fetchData(){

try {
    const res = await fetch(api,{
        headers:{
            Accept:'application/json'
        }
    });
 
    const data = await res.json();
   

     console.log(data);

     console.log("bjnkml");
}
catch(err){
    console.log(err);
}

finally{
    console.log("it will always run")
}
 }




 fetchData();








// Async/await is a syntactic sugar on top of promises.
//  It provides a more concise way to write asynchronous code, making it easier to read and write.
//  With Async/Await, you can write asynchronous code that looks similar to synchronous code, and it uses promises under the hood.

// In async/await, the async keyword is used to declare an asynchronous function.
//  The await keyword is used to wait for a promise to be resolved before continuing with the execution of the function.
//   The await keyword can only be used inside an async function.


// A promise is an object that eventually leads to an asynchronous operation’s completion or failure. 
// A promise can be in one of three states: pending, fulfilled, or rejected.
//  When the asynchronous operation is completed, the Promise will either be fulfilled with a value or rejected with an error.





 //The only difference is the execution context between promise and async/await.

// When a Promise is created and the asynchronous operation is started, the code after the Promise creation continues to execute synchronously.
//  When the Promise is resolved or rejected, the attached callback function is added to the microtask queue. 
// The microtask queue is processed after the current task has been completed but before the next task is processed from the task queue. 
// This means that any code that follows the creation of the Promise will execute before the callback function attached to the Promise is executed.

// On the other hand, with Async/Await, the await keyword causes the JavaScript engine to pause the execution of the async function until the Promise is resolved or rejected. 
// While the async function waits for the Promise to resolve, it does not block the call stack, and any other synchronous code can be executed. 
// Once the Promise is resolved, the execution of the async function resumes, and the result of the Promise is returned. If rejected, it throws an error value.


