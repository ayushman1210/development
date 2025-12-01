"use strict";
// interface User{
//     id:number,
//     name:string,
//     age:number,
//     email:string,
//     married:boolean
// }
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    "akbdd": {
        name: "ayushman",
        age: 23
    },
    "siadb": {
        name: "aryan",
        age: 27
    }
};
//records and maps 
const users = new Map();
users.set("akbdd", { name: "ayushman", age: 23 });
const user1 = users.get("akbdd");
console.log(user1);
//# sourceMappingURL=index.js.map