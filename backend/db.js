import mysql from "mysql2/promise";

let connection;

console.log('db.js loaded'); // Added console log to confirm db.js is loaded

const connectToDatabase = async () => {
  try {
    if (!connection) {
      connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
      });
    }
    return connection;
  } catch (err) {
    console.log(err);
  }
};

export default connectToDatabase;
