require('dotenv').config();
const { Pool } = require('pg');
console.log(process.env.DATABASE_URL)
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function query(text, params) {
  const start = Date.now();
  try {
    const res = await pool.query(text, params);
    const duration = Date.now() - start;

    console.log({ text, duration, rows: res.rowCount });
    return res;
  } catch (error) {
    console.error("Database query failed:", error.message); // show real error
    throw error; // re-throw original error with stack/message
  }
}

module.exports = { query, pool };
