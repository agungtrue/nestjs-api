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
import { CustomerService } from './customer.service';

@Controller('customer')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  @Get()
  async getAllCustomer(@Res() res: any, @Query() queryParam: any) {
    try {
      const { order } = queryParam;
      const users = await this.customerService.getAllCustomers({ order });
      return res
        .status(200)
        .json({ status: 'OK', total: users.length, data: users });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: 'something went wrong',
      });
    }
  }

  @Post()
  createCustomer(@Body() body: any) {
    return { message: 'createCustomer', body };
  }

  @Patch()
  updateCustomer(@Body() body: any) {
    return { message: 'updateCustomer', body };
  }

  @Delete('/:id')
  deleteCustomer(@Param('id') id: string) {
    return { message: 'deleteCustomer', id };
  }
}
