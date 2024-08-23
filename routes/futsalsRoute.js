const express = require("express");
const router = express.Router();

const Futsal = require("../models/futsals"); // Make sure this path is correct

router.get("/getallfutsals", async (req, res) => {
    try {
        const futsals = await Futsal.find({});
        res.send(futsals);
    } catch (error) {
        return res.status(400).json({ message: error });
    }
});

module.exports = router;