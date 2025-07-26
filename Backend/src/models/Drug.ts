import mongoose from "mongoose";

// Drug model schema definition
// This schema defines the structure of the Drug documents in the MongoDB collection
// Each drug has a code, generic name, brand name, company, and launch date
// The launch date is stored as a Date type, while the others are stored as Strings
// The schema is then used to create a Mongoose model named "Drug"
const drugSchema = new mongoose.Schema({
  code: String,
  genericName: String,
  brandName: String,
  company: String,
  launchDate: Date,
});

const Drug = mongoose.model("Drug", drugSchema);

export default Drug;
