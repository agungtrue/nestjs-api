import * as mongoose from 'mongoose';

export const ProductTypeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'a product type must have a name'],
      trim: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);
