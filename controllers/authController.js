import { StatusCodes } from "http-status-codes";
import User from "../models/UserModel.js";
import { comparePassword, hashPassword } from "../utils/passwordUtils.js";
import { UnathenticatedError } from "../errors/customErrors.js";
import { createJWT } from "../utils/tokenUtils.js";

export const register = async (req, res) => {
  const isFirstUser = (await User.countDocuments()) === 0;

  req.body.role = isFirstUser ? "admin" : "user";

  const hashedPassword = await hashPassword(req.body.password);
  req.body.password = hashedPassword;

  const user = await User.create(req.body);

  res.status(StatusCodes.CREATED).json({ user });
};

export const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  const isValidUser =
    user && (await comparePassword(req.body.password, user.password));
  if (!isValidUser) throw new UnathenticatedError("Invalid credentials");

  const token = createJWT({ userId: user._id, role: user.role });
  const oneDay = 1000 * 60 * 60 * 24;
  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === "production",
  });
  return res
    .status(StatusCodes.OK)
    .json({ msg: "User logged in", token: token });
};

export const getAllUsers = async (req, res) => {
  const users = await User.find({});
  return res.status(StatusCodes.OK).json({ users });
};

export const logout = async (req, res) => {
  req.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
};
