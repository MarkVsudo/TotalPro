import dotenv from "dotenv";
import pgPromise from "pg-promise";

dotenv.config();

const pgp = pgPromise();

const connection = process.env.DATABASE_URL || {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT || 5432),
};

const db = pgp(connection);

export default db;
