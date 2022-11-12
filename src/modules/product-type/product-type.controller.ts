import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  Res,
  Query,
} from '@nestjs/common';
import { ProductTypeService } from './product-type.service';
import { ProductTypeDto } from '../../dto/productType/productType-create';

@Controller('productType')
export class ProductTypeController {
  constructor(private productTypeService: ProductTypeService) {}

  @Get()
  async getAllProductType(@Res() res: any) {
    try {
      const order = 1;
      const productTypes = await this.productTypeService.getAllProductType({
        order,
      });
      return res
        .status(200)
        .json({ status: 'OK', total: productTypes.length, data: productTypes });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ message: 'something went wrong', error: error.message });
    }
  }

  @Post()
  async createProductType(@Res() res: any, @Body() body: ProductTypeDto) {
    try {
      const productType = await this.productTypeService.create(body);
      return res
        .status(201)
        .json({ message: 'createProductType', data: productType });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ message: 'something went wrong', error: error.message });
    }
  }
}
