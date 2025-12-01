const db = require('../db/db');

async function createTable() {

  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(50) UNIQUE NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  `;

  try {
    await db.query(createTableQuery);
    console.log("✅ Table created successfully");
  } catch (error) {
    console.error("❌ Error creating table:", error.message);
    console.error(error.stack);
    throw error;
  }
}

async function insert(username ,email){
const insert=`
INSERT INTO users (username,email)
VALUES($1,$2)
RETURNING *
`
try {
    const res=await db.query(insert,[username,email])
    console.log('user inserted ',res.rows[0])
} catch (error) {
    
}
}
async function fetchuser(){
    const getall= `SELECT * FROM users`
    try {
        const res=await db.query(getall);
        console.log(res);
        
    } catch (error) {
        
    }
}

async function updateuser(){
const upadtequery=`
UPDATE users 
SET email =$2
WHERE username =$1
RETURNING  *
`;
try {
    await db.query(upadtequery,[username,newEmail])
    if(res.rows.length >0){
        console.log('user updated ')
        return res.rows[0]
    }
    else{
        console.log("no user found ")
    }
} catch (error) {
    
}
}


async function deleteuser(){
    const deletedquery=`
    DELETE FROM users 
    WHERE username =$1
    RETURNING *
    
    `
    try {
        const res=await db.query(deletedquery,[username])

        if(res.rows.length>0){
            console.log('user deleted ',rows[0])
        }
        
    } catch (error) {
        
    }
}

module.exports = { createTable , insert , fetchuser , updateuser, deleteuser };
