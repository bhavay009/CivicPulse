const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/middleware.js");
const { createComplaint, getMyComplaints } = require("../controllers/complaintController");

// POST /api/complaints
router.post("/", protect, createComplaint);

// GET /api/complaints
router.get("/", protect, getMyComplaints);

module.exports = router;
