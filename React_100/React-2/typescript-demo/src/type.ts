export type Info = {
    id:number,
    name:string,
    email:string,
}

export type Infoc = Info & {
   role:string,
   login:Date;
}

