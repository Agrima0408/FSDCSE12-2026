//console.log("one");
//setTimeout(() => {

 //   console.log("two")
//}, 1000);



//console.log("three");
//setTimeout(()=>{
    //console.log("four");
   // setTimeout(()=>{
       // console.log("five");
        //setTimeout(()=>{
            //console.log("six");
            //setTimeout(()=>{
              //  console.log("seven");
                //setTimeout(()=>{
                 //   console.log("eight");
                //}, 1000);

             
           // }, 1000);  
       // }, 1000);   
 
    //}, 1000);
//}, 1000);
/*
const myPromise = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 10);

    if (number % 2 === 0) {
        resolve("Even number");
    } else {
        reject("Odd number");
    }
});*/



const promise1 = new Promise((resolve, reject) => {
    resolve("Promise 1 completed");
});

const promise2 = new Promise((resolve, reject) => {
    resolve("Promise 2 completed");
});

async function handleData() {
    try {
        const result1 = await promise1;
        console.log(result1);

        const result2 = await promise2;
        console.log(result2);
    } catch (err) {
        console.log(err);
    } finally {
        console.log("All promises handled");
    }
}

handleData();