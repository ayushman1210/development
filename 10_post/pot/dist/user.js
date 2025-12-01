"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: 'postgresql://neondb_owner:npg_n04uHkRSmvch@ep-green-sea-ahzl7wy4-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'
});
const query = async () => {
    await client.connect();
    const data = await client.query(`CREATE TABLE STUDENT (
id PRIMARY KEY ,
name VARCHAR (100),
email VARCHAR (100) UNIQUE NOT NULL,
PASSWORD VARCHAR(100) NOT NULL,
)`);
};
query();
//# sourceMappingURL=user.js.map