import express from 'express';
import { getCovidData } from '../controllers/covidController.js';
const router = express();

router.route('/').get(getCovidData);

export default router;
