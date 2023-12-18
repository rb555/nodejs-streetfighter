import { Router } from "express";
import { userService } from "../services/userService.js";
import {
  createUserValid,
  updateUserValid,
} from "../middlewares/user.validation.middleware.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";
import { dbAdapter } from "../config/db.js";
const router = Router();

// TODO: Implement route controllers for user
const userController = {
  get: async (req, res) => {
    try {
      const db = dbAdapter.getDbInstance(); 
      const users = await userService.getAllUsers(db);
      return res.json(users);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error' });
    }
  },

  create: async (req, res) => {
    try {
      const db = dbAdapter.getDbInstance(); 
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const newUser = req.body;
      const createdUser = await userService.createUser(newUser, db);
      return res.status(201).json(createdUser);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error' });
    }
  },

  
};


export { router };
