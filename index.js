// function orderRecieve() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Order received");
//         }, 1000);
//     });
// }
// function orderPrepare(){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Order prepared");
//         }, 1000);
//     });
// }
// function orderDeliver() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Order delivered");
//         }, 1000);
//     });
// }
// function orderComplete() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Order completed");
//         }, 1000);
//     });
// }

// async function orderHandler() {
//     try {
//         const status = await orderRecieve();
//         const preparedStatus = await orderPrepare();
//         const deliveredStatus = await orderDeliver();
//         const completedStatus = await orderComplete();

//         console.log(status);
//         console.log(preparedStatus);
//         console.log(deliveredStatus);
//         console.log(completedStatus);
//     } catch (err) {
//         console.log(err);
//     } finally {
//         console.log("Order handling completed");
//     }
// }

// orderHandler();
// const button document.getElementById('btn');
// console.log(button)
// async function fetchData() {
//     const serviceData = await fetch('')
//     console.log(serviceData)
// }
// fetchData();

const button = document.getElementById("myButton");
const container = document.getElementById("container");

const loading = document.createElement('div');
container.appendChild(loading);

async function fetchData() {
    try {
        loading.innerHTML="<h2>Loading Data ...</h2>";
        const serverData = await fetch("https://fakestoreapi.com/products");
        const jsonData = await serverData.json();

        console.log(jsonData);

        // container.innerHTML = JSON.stringify(jsonData);
        
        let table = `
        <table border='4px'>
            <tr>
                <td> ITEM_ID </td>
                <td> TITLE </td>
                <td> PRICE </td>
            </tr>
            ${
             jsonData.map((ele)=>(
                `<tr>
                <td>img src=${ele.image} height="100px" width="100px" alt='Cloth'</td>
                <td>$(ele.id)</td>
                <td>$(ele.title)</td>
                <td>$(ele.price)</td>
                </tr>`
             ))   
    }
        </table>`
        container.innerHTML=table;


    } catch (err) {
        // console.log(err);
        loading.innerHTML="<h2>Loading Error</h2>";
    }
    finally{
        loading.innerHTML=''
    }
}

button.addEventListener("click", fetchData);