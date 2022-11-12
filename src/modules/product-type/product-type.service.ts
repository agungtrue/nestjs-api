import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { ProductTypeInterface } from '../../interfaces/productType.interface';

@Injectable()
export class ProductTypeService {
  constructor(
    @Inject('PRODUCT_TYPE_MODEL')
    private readonly productTypeModel: Model<ProductTypeInterface>,
  ) {}

  async getAllProductType(query: any) {
    const defaultOrder = -1;
    const { order } = query;
    return await this.productTypeModel
      .find({})
      .sort({ createdAt: order || defaultOrder })
      .exec();
  }

  async create(payload: any) {
    return await this.productTypeModel.create(payload);
  }
}
