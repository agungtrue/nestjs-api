import { Document, Types } from 'mongoose';

export interface WarrantyClaimInterface extends Document {
  _id: Types.ObjectId;
  productCode: string;
  customerId: Types.ObjectId;
  handledBy: Types.ObjectId;
  status: number;
  customerNotes: string;
  staffNotes: string;
  serialNumberProduct: string;
  serialNumberPhoto: string;
  purchaseDate: string;
  receiptPhoto: string;
  createdAt: Date;
  updatedAt: Date;
}
