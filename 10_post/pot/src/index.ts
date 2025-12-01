import {Client} from 'pg'


const client=new Client({
connectionString:'postgresql://neondb_owner:npg_n04uHkRSmvch@ep-green-sea-ahzl7wy4-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'
})


async function createuser(){
await client.connect();
const user = await client.query(`
  CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`);

    console.log(user);
}

createuser(); 
