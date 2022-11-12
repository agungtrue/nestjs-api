import * as mongoose from 'mongoose';

export const CustomerSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'a customer must have a username'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'a customer must have a email'],
      trim: true,
      unique: true,
    },
    phone: {
      type: String,
      required: [true, 'a customer must have a phone'],
      trim: true,
      unique: true,
    },
    address: {
      type: String,
      required: [true, 'a customer must have a address'],
      trim: true,
    },
    password: {
      type: String,
      required: [true, 'a customer must have a password'],
      trim: true,
    },
    status: {
      type: Number,
      enum: [0, 1], // since we don't focus on customer status then just make default as active'
      default: 1,
    },
    lastLogin: { type: Date },
  },
  {
    timestamps: true,
  },
);
