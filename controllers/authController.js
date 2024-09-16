import { StatusCodes } from "http-status-codes";
import User from "../models/UserModel.js";
import { comparePassword, hashPassword } from "../utils/passwordUtils.js";
import { UnathenticatedError } from "../errors/customErrors.js";

export const register = async (req, res) => {

  const isFirstUser= (await User.countDocuments()) ===0;

  req.body.role= isFirstUser ?"admin" : "user";

  const hashedPassword= await hashPassword(req.body.password);
  req.body.password = hashedPassword;

  const user = await User.create(req.body);
  
  res.status(StatusCodes.CREATED).json({ user });
};

export const login = async (req, res) => {
   
  const user= await User.findOne({email: req.body.email});
  console.log(user)
  console.log(user.name)
  console.log(user.password)
  const isValidUser=  user && (await comparePassword(req.body.password, user.password));
  if(!isValidUser)
    throw new UnathenticatedError("Invalid credentials");

  return res.status(StatusCodes.OK).json({ msg: "User logged in" });
};

export const getAllUsers = async (req, res) => {
  const users = await User.find({});
  return res.status(StatusCodes.OK).json({ users });
};
