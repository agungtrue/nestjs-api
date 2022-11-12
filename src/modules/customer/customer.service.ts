import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { CustomerInterface } from '../../interfaces/customer-interface';

@Injectable()
export class CustomerService {
  constructor(
    @Inject('CUSTOMER_MODEL')
    private readonly customerModel: Model<CustomerInterface>,
  ) {}

  async getAllCustomers(query: any) {
    const defaultOrder = -1;
    const { order } = query;
    return await this.customerModel
      .find({})
      .sort({ createdAt: order || defaultOrder })
      .exec();
  }
}
