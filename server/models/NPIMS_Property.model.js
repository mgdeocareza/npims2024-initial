const mongoose = require("mongoose");

const NPIMSPropertySchema = new mongoose.Schema(
  {
    propertyNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    propertyType: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    dateAcquired: {
      type: Date,
      required: true,
    },
    unitPrice: {
      type: Number,
      required: true,
    },
    endUser: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const NPIMSProperty = mongoose.model("NPIMSProperty", NPIMSPropertySchema);

module.exports = NPIMSProperty;
