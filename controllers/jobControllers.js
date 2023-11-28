import Job from '../models/jobModel.js';
import { StatusCodes } from 'http-status-codes';
import { NotFoundErrors } from '../erros/customErrors.js';

export const getAllJobs = async (req, res) =>{
    const jobs = await Job.find({});
    res.status(StatusCodes.OK).json({jobs})
}

export const createJob = async (req, res) => {
  // const { company, position } = req.body || {};
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
}

export const getJob = async (req, res) =>{
    const {id} = req.params;
    const job = await Job.findById(id);
    if(!job) throw new NotFoundErrors(`not job with id ${id}`)
    res.status(StatusCodes.OK).json({job});
}

export const updateJob = async (req, res) => {
  const { id } = req.params;

  const updatedJob = await Job.findByIdAndUpdate(id, req.body, {new: true})
  if (!updatedJob) throw new NotFoundErrors(`not job with id ${id}`)
  res.status(StatusCodes.OK).json({ msg: 'job modified', updatedJob });
}

export const deleteJob = async (req, res) => {
  const { id } = req.params;
  const removeJob = await Job.findByIdAndDelete(id)
  if (!removeJob) throw new NotFoundErrors(`not job with id ${id}`)
  res.status(StatusCodes.OK).json({ msg: 'job deleted', job: removeJob });
}