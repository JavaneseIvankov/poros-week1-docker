const express = require('express');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const port = 3000;

const pool = new Pool({
   host: process.env.DB_HOST,
   user: process.env.DB_USER,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_NAME,
   port: process.env.DB_PORT,
});

app.get('/', async (req, res) => {
   try {
      const client = await pool.connect();
      const result = await client.query('SELECT NOW()');
      client.release();
      res.send(result.rows);
   } catch (err) {
      console.error(err);
      res.send('Error ' + err);
   }
});

app.listen(port, () => {
   console.log(`Server is running on: http://localhost:${port}`);
});
