"use strict";
obj = {
  name: {
    type: String,
    required: true,
  },
  nationalID: {
    type: String,
  },
  UTIN: {
    type: String,
  },
  TIN: {
    type: String,
    required: true,
  },
  cirle_taxArea: {
    circle: {
      type: String,
      required: true,
    },
    taxArea: {
      type: String,
      required: true,
    },
  },
  assessmentYear: {
    type: String,
    required: true,
  },
  residentialStatus: {
    type: String,
    enum: ["resident", "non-resident"],
    required: true,
  },
  taxpayersStatus: {
    type: String,
    enum: [
      "Individual",
      "Firm",
      "Association of individuals",
      "hinduUndividedFamily ",
    ],
    required: true,
  },
  employersName: {
    type: String,
  },
  wifeOrHusbandName: {
    name: {
      type: String,
    },
    TIN: {
      type: String,
    },
  },
  fathersName: {
    type: String,
    required: true,
  },
  mothersName: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  Address: {
    current: {
      type: String,
      required: true,
    },
    permanent: {
      type: String,
      required: true,
    },
  },
  contact: {
    office: {
      type: String,
      required: true,
    },
    home: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
};
const mongoose = require("mongoose");
const tempSchema = new mongoose.Schema(obj, {TimeStamps: true});
const Temp = mongoose.model("Temp", tempSchema);
module.exports = Temp;
