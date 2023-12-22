const { Pool } = require('pg'); 
require('dotenv').config();

// Konfiguracja połączenia z bazą danych PostgreSQL
const pool = new Pool({
    user: '2022_markowicz_wiktor', 
    host: '195.150.230.208',
    database: '2022_markowicz_wiktor', 
    password: process.env.SECRET_PASSWORD, 
    port: 5432, 
  });

  module.exports = pool;