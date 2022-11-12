import { Module } from '@nestjs/common';
import { customerProviders } from '../customer/customer.providers';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { DatabaseModule } from '../database/database.module';

@Module({
  providers: [CustomerService, ...customerProviders],
  controllers: [CustomerController],
  imports: [DatabaseModule],
  exports: [...customerProviders],
})
export class CustomerModule {}
