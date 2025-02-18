data=[1,2,3,4,5,6,7,8,9];

// function multiply(data){
//     data*=2;
//     return data;
// }
// function divide(data){
//     data/=2;
//     return data;
// }
// function add(data){
//     data+=2;
//     return data;
// }


// const calculate= function (data,fun){
//     var output=[]
//     for(let i=0;i<data.length;i++){
//         output.push(fun(data[i]));
//     }
//     return output;
// }

// console.log(calculate(data,multiply /*callback */));




// function diameter(r){
//     return 2*r;
// }
// function circumference(r){
//     return 2*3.14*r;
// }
// function area(r){
//     return 3.14*r*r;
// }

// const ans1=data.map(diameter);
// const ans2=data.map(circumference);
// const ans3=data.map(area);

// console.log(ans1);
// console.log(ans2);
// console.log(ans3);

// Array.prototype.mapp=function(logic){
    //     var output=[];
    //     for(let i=0;i<this.length;i++){
    //         output.push(logic(this[i]));
    //     }
    //     return output;
    // }

// function odd(data){
//     if(data%2!=0){
//         return data;
//     }
// }

// const oddno=function(data){
//     var output=[];
//     for(let i=0;i<data.length;i++){
//         if(data[i]%2!=0){
//         output.push(data[i]);
//         }
//     }
//     return output;
// }
// Array.prototype.filterdata=function(logic){
//     var output=[];
//         for(let i=0;i<this.length;i++){
//             output.push(logic(this[i]));
//         }
//         return output;
// }

// const result=data.filter(odd);

// console.log(oddno(data));
// console.log(data.filterdata(odd));
// console.log(result);



const user=[
    {firstName:"Pratiyush",lastName:"Ray", age:25},
    {firstName:"Piyush",lastName:"saini", age:23},
    {firstName:"Dakshpreet",lastName:"Singh", age:40},
    {firstName:"Sahil",lastName:"Agarwal", age:20},
    {firstName:"Ayush",lastName:"jawa", age:28},
]

const fullname= user.map((val)=>val.firstName+" "+val.lastName);
const filter=user.filter((val)=>val.age>24).map((val)=>val.firstName+" "+val.lastName+" "+val.age);

console.log(fullname);
console.log(filter)