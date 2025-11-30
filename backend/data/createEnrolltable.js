import pool from "../config/dbConfig.js";

const createEnrollTable = async () => {
  const query = `
   CREATE TABLE IF NOT EXISTS Enroll_Table(
    id SERIAL PRIMARY KEY,
    course_id INTEGER NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);
  `;

  try {
    await pool.query(query);
    console.log("Enroll table created successfully");
  } catch (error) {
    console.error("Error creating Enroll table:", error);
  }
};

export default createEnrollTable;
