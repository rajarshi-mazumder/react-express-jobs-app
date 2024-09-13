import { nanoid } from "nanoid";

let jobs = [
  { id: nanoid(), company: "PRX", position: "Duelist", game: "Valorant" },
  { id: nanoid(), company: "DRX", position: "Sentinel", game: "Valorant" },
];

export const getAllJobs = async (req, res) => {
  res.status(200).json({ jobs });
};

export const createJob = async (req, res) => {
  const { company, position, game } = req.body;
  if (!company || !game) {
    return res.status(400).json({ msg: "Provide comapny and game" });
  }
  const id = nanoid(10);
  const job = { id, company, position, game };
  jobs.push(job);
  return res.status(201).json({ job });
};

export const getJob = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const job = jobs.find((job) => job.id === id);

  if (!job) {
    return res.status(404).json({ msg: `No job with id ${id}` });
  }
  return res.status(200).json({ job });
};

export const updateJob = async (req, res) => {
  const { company, position, game } = req.body;
  if (!company || !game) {
    return res.status(400).json({ msg: "Please provide comapny and game" });
  }

  const { id } = req.params;
  console.log(id);
  const job = jobs.find((job) => job.id === id);

  if (!job) {
    return res.status(404).json({ msg: `No job with id ${id}` });
  }
  job.company = company;
  job.game = game;
  job.position = position;

  return res.status(200).json({ msg: `Job modified ${{ job }}` });
};

export const deleteJob = async (req, res) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(400).json({ msg: `Job with ${id} not found` });
  }

  const newJobs = jobs.filter((job) => job.id !== id);
  jobs = newJobs;

  return res.status(201).json({ job });
};
