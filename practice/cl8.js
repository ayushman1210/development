//axios vs fetch 
const axios=require('axios')

async function main(){
const response=await fetch("domain", {method:"POST"});
const text1 =await response.text();
console.log(text1)
}

async function main1(){
    const response1=await axios.get("domain");

    console.log(response1.data)
}

main();
main1();