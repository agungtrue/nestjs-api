import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { StaffInterface } from '../../interfaces/staff-interface';
import { WarrantyClaimInterface } from '../../interfaces/warrantyClaim.interface';

@Injectable()
export class StaffService {
  constructor(
    @Inject('STAFF_MODEL')
    private readonly staffModel: Model<StaffInterface>,

    @Inject('WARRANTY_CLAIM_MODEL')
    private readonly warrantyClaimModel: Model<WarrantyClaimInterface>,
  ) {}

  async getAllStaff(query: any) {
    const defaultOrder = -1;
    const { order } = query;
    return await this.staffModel
      .find({})
      .sort({ createdAt: order || defaultOrder })
      .exec();
  }

  async warrantyClaimAction(id: string, payload: any) {
    const { status, staff, staffNotes } = payload;
    return await this.warrantyClaimModel.findByIdAndUpdate(
      id,
      {
        status,
        handledBy: staff,
        staffNotes,
      },
      { new: true, runValidators: true },
    );
  }
}
