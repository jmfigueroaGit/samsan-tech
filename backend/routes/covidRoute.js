import express from "express";
import {
  getCovidData,
  getNewsData,
  getAllCovidData,
} from "../controllers/covidController.js";
const router = express();

router.route("/").get(getCovidData);
router.route("/news").get(getNewsData);
router.route("/data").get(getAllCovidData);

export default router;
