import express from 'express';
import { getCovidData, getNewsData } from '../controllers/covidController.js';
const router = express();

router.route('/').get(getCovidData);
router.route('/news').get(getNewsData);

export default router;
