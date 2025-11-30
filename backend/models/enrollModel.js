import pool from "../config/dbConfig.js";

export const createEnrollModel = async (course_id,user_id)=>{
    const result = await pool.query("INSERT INTO Enroll_Table (course_id,user_id) VALUES($1,$2) RETURNING *",[course_id,user_id]);
    return result.rows;
}

