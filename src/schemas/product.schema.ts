import * as mongoose from 'mongoose';
const { Types } = mongoose;

export const ProductSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: [true, 'a product must have a product name'],
      trim: true,
    },
    productCode: {
      type: String,
      required: [true, 'a product must have a product code'],
      trim: true,
      unique: true,
    },
    productType: {
      type: Types.ObjectId,
      required: [true, 'a product must have a product type'],
      ref: 'ProductType',
    },
    brandName: {
      // i decide to create a static brand name, instead of create new collection/model,
      type: String,
      required: [true, 'a product must have a brand name'],
      trim: true,
    },
    serialNumber: {
      type: String,
      required: [true, 'a product must have a serial number'],
      trim: true,
      unique: true,
    },
    specification: { type: String },
  },
  {
    timestamps: true,
  },
);
