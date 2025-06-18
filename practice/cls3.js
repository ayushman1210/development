// const date=new Date();

// console.log(`${date.getHours()}: ${date.getMinutes()} : ${date.getSeconds()}`)
// let count=30;
// setInterval(() => {
//     if(count>0){
//         console.log(count);
//         count--;
//     }
// }, 1000);




let startTime = Date.now();

setTimeout(() => {
    let endTime = Date.now();
    let elapsed = endTime - startTime;
    console.log(startTime)
    console.log(endTime)
    console.log(`Elapsed time: ${elapsed}ms`);
}, 1000); 
