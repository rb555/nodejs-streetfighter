import { Router } from "express";
import { fighterService } from "../services/fighterService.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";
import {
  createFighterValid,
  updateFighterValid,
} from "../middlewares/fighter.validation.middleware.js";

const router = Router();

// TODO: Implement route controllers for fighter
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
