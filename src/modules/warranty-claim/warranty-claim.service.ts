import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { WarrantyClaimInterface } from '../../interfaces/warrantyClaim.interface';

@Injectable()
export class WarrantyClaimService {
  constructor(
    @Inject('WARRANTY_CLAIM_MODEL')
    private warrantyClaimModel: Model<WarrantyClaimInterface>,
  ) {}

  async getAllWarrantyClaims(query: any) {
    const defaultOrder = -1;
    const { order } = query;
    console.log({ order: order || defaultOrder });
    return await this.warrantyClaimModel
      .find()
      .populate(['customerId', 'handledBy'])
      .sort({ createdAt: order || defaultOrder });
  }

  async createWarrantyClaims(payload: any) {
    return await this.warrantyClaimModel.create(payload);
  }

  async updateWarrantyClaims(id: string, payload: any) {
    return await this.warrantyClaimModel.findByIdAndUpdate(id, payload, {
      new: true,
      runValidators: true,
    });
  }
}
