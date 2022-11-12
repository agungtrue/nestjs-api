import mongoose from 'mongoose';
const { Types } = mongoose;

export const WarrantyClaimSchema = new mongoose.Schema(
  {
    productCode: {
      type: String,
      required: [true, 'a warranty must have a product code'],
      ref: 'Product',
    },
    customerId: {
      type: Types.ObjectId,
      required: [true, 'a warranty must have a customer id'],
      ref: 'Customer',
    },
    handledBy: {
      type: Types.ObjectId,
      ref: 'Staff',
      default: null,
    },
    status: {
      type: String,
      required: [true, 'a warranty must have a status'],
      enum: ['submitted', 'approved', 'failed', 'done'],
      //   submitted: first ticket entered
      //   approved: being worked on
      //   failed: there is a reason that ticket/request cannot be processed
      //   done: request/ticket already done, user should be able to take action on the product
      default: 'submitted',
    },
    customerNotes: {
      type: String,
      required: [true, 'a warranty must have a customer notes notes'],
      trim: true,
    },
    staffNotes: {
      type: String,
      trim: true,
      default: null,
    },
    serialNumberProduct: {
      type: String,
      required: [true, 'a warranty must have a serial Number Product'],
      trim: true,
    },
    serialNumberPhoto: {
      type: String,
      required: [true, 'a warranty must have a serial Number Photo'],
      trim: true,
    },
    purchaseDate: {
      type: Date,
      required: [true, 'a warranty must have a purchase Date'],
    },
    receiptPhoto: {
      type: String,
      required: [true, 'a warranty must have a receipt Photo'],
      trim: true,
    },
  },
  { timestamps: true },
);

// - warrantyClaim
// {
//     _id: ObjectId,
//     productId: ObjectId,
//     customerId: ObjectId,
//     handledBy: ObjectId, default: null // staff
//     status: enum['submitted', 'failed', 'approved'], default 'submitted',
//     customerNotes: string,
//     staffNotes: string,
//     serialNumberProduct: string,
//     serialNumberPhoto: string,
//     purchaseDate: datetime,
//     receiptPhoto: string,
//     timestamp/createdAt && updatedAt: timestamp,
// }
