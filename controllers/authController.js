import { StatusCodes } from "http-status-codes";
import User from "../models/UserModel.js";

export const register = async (req, res) => {
  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ user });
};

export const login = async (req, res) => {
  console.log(req.params);
  res.status(StatusCodes.OK).json({ msg: "User logged in" });
};

export const getAllUsers = async (req, res) => {
  const users = await User.find({});
  return res.status(StatusCodes.OK).json({ users });
};
