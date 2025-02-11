// function two(){
//     return 2;
// }
// function four(){
//     return 4;
// }
// console.log(1);
// console.log(two());
// setInterval(() => {
//     console.log(3)
// }, 3000);
// console.log(four());
// setInterval(() => {
//     console.log(5)
// }, 5000);
// console.log(6);


// closures

// function output(x){
//     setTimeout(()=>{
//                 console.log(x)
//             },1000);
// }
// for(var i=0;i<=6;i++){
//     output(i);
// }


// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }

// var z=x();
// console.log(z);

// z();

// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     a=100;
//     return y;
// }

// var z=x();
// console.log(z);

// z();



// Important case

// var count=0;
// function increment(){
//     count++;
//     function inc(){
//         count++;
//         function add()
//         {
//             count++;
//         }
//         add();
//     } inc()
// }
// increment();

// console.log(count);
// this output is temperarable as the count is in global scope so the output will be 3 but any other function can access and upadte it



// function secure(){
// var count=0;

// function increment(){
//     count++;
// }
// for(var i=0;i<n;i++){
// increment();
// }
// console.log(count);
// }



// function secure(){
//     var count=0;
//     return function increment(){
//         count++;

//     console.log(count);
//     }
// }
// var counter=secure();
// counter();
// counter();
// counter();



function secure(){
    var count=0;
    this.increment=function(){
        count++;
    console.log(count);
    }
    this.decrement=function(){
        count--;
    console.log(count);
    }
}
var counter=new secure();
counter.increment();
counter.increment();
counter.decrement();


