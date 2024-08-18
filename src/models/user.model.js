"use strict";
const obj = {
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
  circle_taxArea: {
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
    enum: ["Resident", "Non-resident"],
    required: true,
  },
  taxpayersStatus: {
    type: String,
    enum: [
      "Individual",
      "Firm",
      "Association of individuals",
      "hindu Undivided Family ",
    ],
    required: true,
  },
  employersName: {
    type: String,
  },
  spouse: {
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
  address: {
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
    },
  },
};
const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(obj, {TimeStamps: true});
const User = mongoose.model("User", UserSchema);
module.exports = User;
