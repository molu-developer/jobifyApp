import { Router } from 'express';
const router = Router();

import {
    getAllJobs, 
    getJob, 
    createJob, 
    updateJob, 
    deleteJob
} from '../controllers/jobController.js';
import { validateJobInput, validIdParam } from '../middleware/validationMiddleware.js';

// router.get('/', getAllJobs)
// router.post('/', createJob)

router.route('/').get(getAllJobs).post(validateJobInput, createJob);
router.route('/:id').get(validIdParam, getJob).patch(validateJobInput, validIdParam, updateJob).delete(validIdParam, deleteJob);

export default router;