import * as mongoose from 'mongoose';

export const StaffSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'a staff must have a username'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'a staff must have a email'],
      trim: true,
      unique: true,
    },
    phone: {
      type: String,
      required: [true, 'a staff must have a phone'],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'a staff must have a password'],
      trim: true,
    },
    lastLogin: { type: Date },
  },
  {
    timestamps: true,
  },
);
