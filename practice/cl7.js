const arr=[2,3,4,5,6];

const array=arr.map((child)=>{
return child =child*2;
})

// console.log(array); 

const arrayq=arr.filter((child)=>{
    if(child%2==0){return child}
});

console.log(arrayq)