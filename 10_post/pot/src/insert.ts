import {Client } from 'pg'

const client=new Client({
    connectionString:'postgresql://neondb_owner:npg_n04uHkRSmvch@ep-green-sea-ahzl7wy4-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'
});
async function insert(){
    try {
        await client.connect();
        const data= (`INSERT INTO users (name,email,password) VALUES ($1, $2, $3);`)
        const value=['ayush','ayushman@gmail.com','123422'];
        const res=await client.query(data,value);
        console.log(res);
            // console.log(`success recieved `, data);
    } catch (error) {
        console.log(error);
    }
}

insert();