const mongoose = require("mongoose");

const futsalSchema = mongoose.Schema({
    name: { type: String, required: true },
    imageurls: { type: Array, required: true },
    Location: { type: String, required: true },
    Phonenumber: { type: String, required: true },
    priceperhour: { type: Number, required: true },
    currentbookings: { type: Array, default: [] },
    type: { type: String, required: true },
    description: { type: String, required: true }
});

const futsals = mongoose.model("futsals", futsalSchema);

module.exports = futsals;
