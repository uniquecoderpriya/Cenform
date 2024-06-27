import express from 'express';
import { storeCensusData, getTotalPersonsCount,getAllCensusData} from '../controllers/censusController.js';

const router = express.Router();

router.post('/census', storeCensusData);
router.get('/total-count', getTotalPersonsCount);
router.get('/get-alldata', getAllCensusData);


export default router;
