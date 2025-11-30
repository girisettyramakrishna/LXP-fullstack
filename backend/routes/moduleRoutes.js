 import express from 'express';
import { createModule, getAllModules, getModuleById, updateModule, deleteModule } from '../controllers/moduleController.js';    

const module_router = express.Router();
module_router.post("/modules/:course_id", createModule);
module_router.get("/modules", getAllModules);
module_router.get("/modules/:id", getModuleById);
module_router.put("/modules/:id", updateModule);
module_router.delete("/modules/:id", deleteModule);

export default module_router;