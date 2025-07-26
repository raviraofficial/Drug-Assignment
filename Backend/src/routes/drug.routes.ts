import express from "express";
import { getCompanies, getDrugs } from "../service/drug.service";

const router = express.Router();

// GET /drugs - Fetch all drugs or filter by company
router.get("/drugs", async (req, res) => {
  try {
    const { company } = req.query;
    const drugs = await getDrugs(company as string);
    res.json(drugs);
  } catch (err) {
    res.status(500).json({ message: "Error fetching drugs", error: err });
  }
});

// GET /companies - Fetch distinct company names
router.get("/companies", async (_req, res) => {
  try {
    const companies = await getCompanies();
    res.json(companies);
  } catch (err) {
    res.status(500).json({ message: "Error fetching companies", error: err });
  }
});

export default router;
