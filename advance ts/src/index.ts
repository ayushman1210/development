// interface User{
//     id:number,
//     name:string,
//     age:number,
//     email:string,
//     married:boolean
// }

// type updated=Pick<User,'name'| 'age' | 'email'>
// type updatesoptional=Partial<updated>
 
// function updateduser(update:updatesoptional){

// }

// updateduser({name:"John",age:30,email:"ayushmangupta892@gmail.com"})
// console.log(updateduser);
// // function add(a:User,b:User):number{
// // return a.age+b.age
// // }


// type go={
//     name:string,
//     age:number
// }

// const user:Readonly<go>{
// name="ayushman",
// age="gupta"
// }

// user.name="newname" // error because of readonly

type User={
    name:string,
    age:number
}

// type Users={
//     [key:string]:User;
// }

type Users=Record<string,User>


const user:Users={
    "akbdd":{
        name:"ayushman",
        age:23
    },
    "siadb":{
        name:"aryan",
        age:27
    }
}

//records and maps 

const users=new Map<string,User>();
users.set("akbdd",{name:"ayushman",age:23})
const user1=users.get("akbdd");
console.log(user1);