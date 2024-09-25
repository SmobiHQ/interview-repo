import { Request, Response } from "express";
import { UserService } from "./users.service";

const userService = new UserService();

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsers();
    return res.json(users);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await userService.getUserById(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.json(user);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { email, name } = req.body;
    const newUser = await userService.createUser({ email, name });
    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { email, name } = req.body;
    const updatedUser = await userService.updateUser(id, { email, name });
    return res.json(updatedUser);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await userService.deleteUser(id);
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};
