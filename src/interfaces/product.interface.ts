import { Document, Types } from 'mongoose';

export interface ProductInterface extends Document {
  _id: Types.ObjectId;
  productName: string;
  productCode: string;
  productType: Types.ObjectId;
  brandName: string;
  serialNumber: string;
  specification: string;
  createdAt: Date;
  updatedAt: Date;
}
