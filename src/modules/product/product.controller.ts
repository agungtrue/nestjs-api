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
  HttpStatus,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from '../../dto/product/product-create-dto';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  async getAllProduct(@Res() res: any, @Query() queryParam: any) {
    try {
      const { order } = queryParam;
      const products = await this.productService.getAllProduct({ order });
      return res
        .status(HttpStatus.OK)
        .json({ status: 'OK', total: products.length, data: products });
    } catch (error) {
      console.error(error);
      return res
        .status(400)
        .json({ message: 'something went wrong', error: error.message });
    }
  }

  @Post()
  async createProduct(@Res() res: any, @Body() body: ProductDto) {
    try {
      const product = await this.productService.createProduct(body);
      return res.status(HttpStatus.CREATED).json({
        status: 'CREATED',
        message: 'successfully create product',
        data: product,
      });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ message: 'something went wrong', error: error.message });
    }
  }

  @Patch('/:productId')
  async updateProduct(
    @Res() res: any,
    @Body() body: any,
    @Param('productId') productId: string,
  ) {
    try {
      // check product is exist or not
      const isProductExist = await this.productService.findOne(productId);
      if (!isProductExist)
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: 'Product not found', data: isProductExist });

      // update product
      const product = await this.productService.updateProduct(productId, body);
      return res.status(HttpStatus.OK).json({
        status: 'OK',
        message: 'successfully update product',
        data: product,
        isProductExist,
      });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ message: 'something went wrong', error: error.message });
    }
  }

  @Delete('/:productId')
  async deleteProduct(@Res() res: any, @Param('productId') productId: string) {
    try {
      // check product is exist or not
      const isProductExist = await this.productService.findOne(productId);
      if (!isProductExist)
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: 'Product not found', data: isProductExist });

      // delete product
      await this.productService.deleteProduct(productId);
      return res
        .status(HttpStatus.OK)
        .json({ message: 'successfully delete product' });
    } catch (error) {
      console.error(error);
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: 'something went wrong', error: error.message });
    }
  }
}
