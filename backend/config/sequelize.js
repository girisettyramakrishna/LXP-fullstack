import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.POSTGRES_DB,
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASSWORD,
  {
    host: process.env.POSTGRES_HOST || "postgres_db",
    port: process.env.POSTGRES_PORT || 5432,
    dialect: "postgres",
    logging: false, // set to console.log if you want SQL logs
  }
);

try {
  await sequelize.authenticate();
  console.log("✅ Sequelize connected to PostgreSQL successfully");
} catch (error) {
  console.error("❌ Sequelize connection failed:", error.message);
}

export default sequelize;
