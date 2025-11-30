import {
  getAllUsersService,
  getUserByIdService,
  createUserService,
  updateUserService,
  deleteUserService,
  getUserByEmailService,
  Update_Bio,
  Update_Image,
} from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { minioClient } from "../config/MinIoConfig.js";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";

dotenv.config();

const handleResponse = (res, statusCode, message, data = null) => {
  res.status(statusCode).json({ message, data, statusCode });
};

// ✅ Create User
export const createUser = async (req, res, next) => {
  try {
    let { name, email, password, role } = req.body;
    if (!email || !password || !name) {
      return handleResponse(res, 400, "All fields are required");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const userData = { name, email, password: hashedPassword, role };
    const newUser = await createUserService(userData);
    handleResponse(res, 201, "User created successfully", newUser);
  } catch (error) {
    next(error);
  }
};

// ✅ Get All Users
export const getAllUsers = async (req, res, next) => {
  try {
    const users = await getAllUsersService();
    handleResponse(res, 200, "Users retrieved successfully", users);
  } catch (error) {
    next(error);
  }
};

// ✅ Get User by ID
export const getUserById = async (req, res, next) => {
  try {
    const user = await getUserByIdService(req.params.id);
    if (!user) return handleResponse(res, 404, "User not found");
    handleResponse(res, 200, "User retrieved successfully", user);
  } catch (error) {
    next(error);
  }
};

// ✅ Update User
export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await updateUserService(req.params.id, req.body);
    if (!updatedUser) return handleResponse(res, 404, "User not found");
    handleResponse(res, 200, "User updated successfully", updatedUser);
  } catch (error) {
    next(error);
  }
};

// ✅ Delete User
export const deleteUser = async (req, res, next) => {
  try {
    const deleted = await deleteUserService(req.params.id);
    if (!deleted) return handleResponse(res, 404, "User not found");
    handleResponse(res, 200, "User deleted successfully");
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await getUserByEmailService(email);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // ✅ Normalize role
    const normalizedRole = user.role ? user.role.toLowerCase() : "student";

    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, role: normalizedRole },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // ✅ Updated consistent response
    return res.status(200).json({
      message: "Login successful",
      data: {
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: normalizedRole, // ✅ lowercase role
        },
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
};


// ✅ Update Bio
export const updateBio = async (req, res, next) => {
  try {
    const email = req.user.user_email;
    const bio = req.body.bio;
    const user = await getUserByEmailService(email);

    if (!user) return handleResponse(res, 404, "User not found");

    const update = await Update_Bio(user.id, bio);
    if (!update) return handleResponse(res, 400, "Bio update failed");

    handleResponse(res, 200, "Bio updated successfully");
  } catch (error) {
    next(error);
  }
};

// ✅ Update Image
export const UpdateImage = async (req, res, next) => {
  let image_name;
  try {
    const email = req.user.user_email;
    const image = req.file;
    if (!image)
      return handleResponse(res, 400, "Image file is required for upload");

    image_name = `${uuidv4()}_${image.originalname}`;
    const user = await getUserByEmailService(email);
    if (!user) return handleResponse(res, 404, "User not found");

    await minioClient.fPutObject("images", image_name, image.path);
    fs.unlinkSync(image.path);

    const update = await Update_Image(user.id, image_name);
    if (!update) return handleResponse(res, 400, "Image update failed");

    handleResponse(res, 200, "Image uploaded successfully");
  } catch (error) {
    if (image_name) {
      try {
        await minioClient.removeObject("images", image_name);
      } catch (cleanupError) {
        console.error("Cleanup failed:", cleanupError);
      }
    }
    next(error);
  }
};
