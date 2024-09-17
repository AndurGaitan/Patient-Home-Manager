import express from 'express';
import { getPatients, assignKinesiologist } from '../controllers/patientController.js';

const router = express.Router();

router.get('/', getPatients);
router.post('/assign', assignKinesiologist);

export default router;
