//harkirat 
function greet(firstname,lastname){
    console.log(`hello ${firstname} ${lastname}`)
}

greet("ayushman","gupta");


let gender="MALE";
if(gender="MALE"){console.log("hello sir")}
else{console.log("helo mam")}


let count=0;
for(let i=0; i<1000; i++){
    count+=i;
}

console.log(count);

let arr=[1,2,3,4,5,6]

for(let i=0; i<arr.length;i++){
if(arr[i]%2==0){ console.log(arr[i])};
}

let user=[{
  name:"ayush",
  gender:"male"  
},
{
    name:"kari",
    gender:"male",
    data:{
        num:7
        }
},
{
    name:"ayushman",
    gender:"male"
},{
    name:"irl",
    gender:'female '

}]


for(let i=0; i<user.length; i++){
if(user[i]["name"]=="kari"){
    console.log(user[i]["data"]["num"])
}
}