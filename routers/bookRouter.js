const express = require("express");
const { book, reset, getBooking } = require("../controllers/bookingController");
const router = express.Router();

router.put("/", book);
router.post("/reset", reset);
router.get("/getBooking", getBooking);

module.exports = router;
