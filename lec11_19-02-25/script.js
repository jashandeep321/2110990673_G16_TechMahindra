// Reduce


// const arr=[5,7,3,1,8];

// var sumOfArr=0;
// for(let i=0;i<arr.length;i++){
//     sumOfArr+=arr[i];
// }

// console.log(sumOfArr);

// arr.reduce(function(acc,curr){
//     acc=acc+curr;
//     return acc;
// },0)
// console.log(ans);


// const users=[
//     {firstName:"Pratiyush",lastName:"Ray", age:25},
// {firstName:"Piyush",lastName:"saini", age:23},
// {firstName:"Dakshpreet",lastName:"Singh", age:20},
// {firstName:"Sahil",lastName:"Agarwal", age:20},
// {firstName:"Ayush",lastName:"jawa", age:23},

// ]

// const ans=users.reduce(function(acc,curr){
//     if(!acc[curr.age]){
//         acc[curr.age]=1;
//     }
//     else{
//         acc[curr.age]++;
//     }
//     return acc;
// },{})
// console.log(ans);



// dataMap=[2,5,8,7,3,9,7,10]

// var maxvalue=0;
// for(let i=0;i<dataMap.length;i++){
//     if(maxvalue<dataMap[i]){
//         maxvalue=dataMap[i];
//     }
// }

// console.log(maxvalue);

// let ans=dataMap.reduce(function(acc,curr){
// if(curr>acc){
//     acc=curr;
// }
// return acc;
// },0)
// console.log(ans)


// Promise





const cart=["shoes","watches","bags","glasses","shirts"]
// createOrder(cart,callback){
    //     console.log("order created");
    //     orderPayment(orderID, callback){
    //         console.log("order payment");
    //         orderSummary(orderID,callback){
    //             console.log("order summary");
    //             updateWallet(){
    //                 console.log("wallet updated");
    //             }
    //         }
    //     }
    // }

// createOrder(cart)
// .then(orderPayment(orderId))
// .then(orderSummary(orderId))
// .then(updateWallet)


function createOrder(cart){
    const myPromise=new Promise(function(resolve,reject){
        if(cart.length){
            console.log("Oreder created successfully")
            resolve("12345");
        }
        else{
            const err=new Error("Order Failed")
            reject(err.message);
        }
    });
    return myPromise;
}


function orderPayment(orderId){
    console.log("order payment success",orderId);
}

function orderSummary(orderId){
    console.log("order summary created",orderId);
}

function updatewallet(){
    console.log("wallet updated");
}

createOrder(cart)
.then(function(orderId){
    return orderPayment(orderId)
})

.then(function(orderId){
    return orderSummary(orderId)
})
.then(function(){
    return updatewallet()
})

.catch(function(err){
    console.log("error occured")
    console.log(err.msg);
})