import { nanoid } from "nanoid";
import Job from "../models/JobModel.js";
import { StatusCodes } from "http-status-codes";
import { InternalServerError } from "../errors/customErrors.js";

let jobs = [
  { id: nanoid(), company: "PRX", position: "Duelist", game: "Valorant" },
  { id: nanoid(), company: "DRX", position: "Sentinel", game: "Valorant" },
];

export const getAllJobs = async (req, res) => {
  const jobs = await Job.find();
  res.status(StatusCodes.OK).json({ jobs });
};

export const createJob = async (req, res) => {
  const { company, position, game } = req.body;
  const job = await Job.create(req.body);
  return res.status(StatusCodes.CREATED).json({ job });
};

export const getJob = async (req, res) => {
  try {
    const { id } = req.params;

    const job = await Job.findById(id);

    return res.status(StatusCodes.OK).json({ job });
  } catch (error) {
    throw new InternalServerError(`En error occured ${error}`);
  }
};

export const updateJob = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedJob = await Job.findByIdAndUpdate(id, req.body, {
      new: true,
      upsert: true,
    });

    return res
      .status(StatusCodes.OK)
      .json({ msg: `Job modified ${updatedJob.toObject()}` });
  } catch (error) {
    throw InternalServerError(error);
  }
};

export const deleteJob = async (req, res) => {
  try {
    const { id } = req.params;
    const removedJob = await Job.findByIdAndDelete(id);

    return res
      .status(StatusCodes.OK)
      .json({ msg: "job deleted", job: removedJob.toObject() });
  } catch (error) {
    throw InternalServerError(error);
  }
};
