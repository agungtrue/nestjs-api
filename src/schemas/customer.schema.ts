import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CustomerDocument = HydratedDocument<Customer>;

@Schema()
export class Customer {
  @Prop()
  username: string;

  @Prop()
  email: string;

  @Prop()
  phone: string;

  @Prop()
  address: string;

  @Prop()
  password: string;

  @Prop()
  status: number;

  // @Prop(
  //   raw({
  //     timestamps: {
  //       createdAt: 'createdAt',
  //       updatedAt: 'updatedAt',
  //     },
  //   }),
  // )
  // timestamps: any;

  @Prop(
    raw({
      lastLogin: {
        type: Date,
        default: Date.now(),
      },
    }),
  )
  lastLogin: any;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);

// _id: ObjectId,
//     username: string,
//     email: string,
//     phone: string,
//     address: string,
//     password: string,
//     status: enum(0,1), default: 0,
//     timestamp/createdAt && updatedAt: timestamp,
//     lastLogin: datetime, default Date.now,
