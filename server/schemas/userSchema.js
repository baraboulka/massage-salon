const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    validate: {
      validator: function (v) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email!`,
    },
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    unique: false,
    min: 3,
  },
  surname: {
    type: String,
    required: true,
    unique: false,
    min: 2,
  },
  phoneNumber: {
    type: String,
    validate: {
      validator: function (v) {
        return /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*/.test(v);
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
    required: true,
    unique: false,
  },
  registrationDate: {
    type: Date,
    default: Date.now,
  },
});

exports.userSchema = userSchema;
