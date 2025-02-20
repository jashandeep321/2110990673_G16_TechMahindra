// const myPromiseFromNetflix = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         // resolve("Fetched data from Netflix 1sec");
//         reject("Error fetching data from Netflix 1sec");
//     }, 1000);
// });
// const myPromiseFromTwitter = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         // resolve("Fetched data from Twitter 2sec");
//         reject("Error fetching data from Twitter 2sec");
//     }, 2000);
// });
// const myPromiseFromGithub = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         // resolve("Fetched data from Github 3sec");
//         reject("Error fetching data from Github 3sec");
//     }, 3000);
// });
// const myPromiseFromHotstar = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         // resolve("Fetched data from Hotstar 4sec ");
//         reject("Error fetching data from Hotstart 4sec");
//     }, 4000);
// });


// const dataFromAll = Promise.all([myPromiseFromGithub, myPromiseFromHotstar, myPromiseFromNetflix, myPromiseFromTwitter]);
// console.log(dataFromAll);

// const datasetteled = Promise.allSettled([myPromiseFromGithub, myPromiseFromHotstar, myPromiseFromNetflix, myPromiseFromTwitter]);
// console.log(datasetteled);

// const dataFromAny = Promise.any([myPromiseFromGithub, myPromiseFromHotstar, myPromiseFromNetflix, myPromiseFromTwitter]);
// console.log(dataFromAny);

// const dataRace = Promise.race([myPromiseFromGithub, myPromiseFromHotstar, myPromiseFromNetflix, myPromiseFromTwitter]);
// console.log(dataRace)




// async function techDirectFun(){
//     console.log("This is async func call");
// } 

// const data=techDirectFun();
// console.log(data);
// data.then((res)=>{
//     return res;
// })


// const projectSubmission = new Promise(
//     function (res, rej) {
//         setTimeout(() => {
//             res("Submitted Project Successfully")
//         }, 4000)
//     });


// function projectEvaluate() {
//     const projectFile = projectSubmission;
//     console.log(projectFile);
// }

// projectEvaluate();

// const projectSubmission = new Promise(
//     function (res, rej) {
//         setTimeout(() => {
//             res("Submitted Project Successfully")
//         }, 4000)
//     });


// async function projectEvaluate() {
//     const projectFile = await projectSubmission;
//     console.log(projectFile);
// }

// projectEvaluate();


// console.log("Class strt");
// const ProjectSubmission= new Promise( function (resolve,reject) {
//     setTimeout(() => {
//         resolve("Project Submitted")
//     }, 5000);
//     console.log("Class Lunch");
// });

// async function ProjectEvaluation(){
//     console.log("Attendence viva");
//     const ProjectFile = await ProjectSubmission;
//     console.log(ProjectFile);
//     console.log("ProjectFileCheck")
// }

// ProjectEvaluation();
// console.log("Class end");

// console.log("class start"); 
// const ProjectSubmission=new Promise(function(res,rej){
//     setTimeout(()=>{

//     })
// })



// Fetching Data

async function fetchApiData(){
    try{
        const data=await fetch("https://api.chucknorris.io/jokes/categories")
        const mydata=await data.json();
        return mydata;
    }
    catch(err){
        console.log(err);
    }
}
const finaldata=fetchApiData();

finaldata.then((res)=>{
    console.log(res);
})
