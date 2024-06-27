import express from 'express';
import { signup ,login} from '../controllers/adminController.js';


const router = express.Router();

router.post('/adsignup', signup);
router.post('/adlogin',login );

export default router; 
