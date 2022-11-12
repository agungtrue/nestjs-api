import { Document, Types } from 'mongoose';

export interface CustomerInterface extends Document {
  _id: Types.ObjectId;
  username: string;
  email: string;
  phone: string;
  address: string;
  password: string;
  status: number;
  createdAt: Date;
  updatedAt: Date;
  lastLogin: string;
}
