import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { ProductInterface } from '../../interfaces/product.interface';

@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCT_MODEL')
    private readonly productModel: Model<ProductInterface>,
  ) {}

  async getAllProduct(query: any) {
    const defaultOrder = -1;
    const { order } = query;
    return await this.productModel
      .find({})
      .populate(['productType'])
      .sort({ createdAt: order || defaultOrder });
  }

  async createProduct(payload: any) {
    return await this.productModel.create(payload);
  }

  async updateProduct(id: string, payload: any) {
    return await this.productModel.findByIdAndUpdate(id, payload, {
      new: true,
      runValidators: true,
    });
  }

  async deleteProduct(id: string) {
    return await this.productModel.findByIdAndDelete(id);
  }

  async findOne(id: string) {
    return await this.productModel.findById(id);
  }
}
