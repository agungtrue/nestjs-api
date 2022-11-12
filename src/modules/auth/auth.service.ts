import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { CustomerInterface } from '../../interfaces/customer-interface';
import { StaffInterface } from '../../interfaces/staff-interface';

@Injectable()
export class AuthService {
  constructor(
    @Inject('CUSTOMER_MODEL')
    private readonly customerModel: Model<CustomerInterface>,

    @Inject('STAFF_MODEL')
    private readonly staffModel: Model<StaffInterface>,
  ) {}
  async create(payload: object) {
    return await this.customerModel.create(payload);
  }

  async isCustomerExist(payload: any) {
    const { email, phone } = payload;
    const user = await this.customerModel
      .find({
        $or: [{ email }, { phone }],
      })
      .exec();

    if (user.length) return true;

    return false;
  }

  async createStaff(payload: object) {
    return await this.staffModel.create(payload);
  }

  async isStaffExist(payload: any) {
    const { email, phone } = payload;
    const user = await this.staffModel
      .find({
        $or: [{ email }, { phone }],
      })
      .exec();

    if (user.length) return true;

    return false;
  }
}
