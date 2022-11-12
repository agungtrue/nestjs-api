import { Document, Types } from 'mongoose';

export interface StaffInterface extends Document {
  username: string;
  email: string;
  phone: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  lastLogin: string;
}
