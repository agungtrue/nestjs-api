import { Module } from '@nestjs/common';
import { ProductTypeController } from './product-type.controller';
import { ProductTypeService } from './product-type.service';
import { productTypeProviders } from './product-type.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  providers: [ProductTypeService, ...productTypeProviders],
  controllers: [ProductTypeController],
  imports: [DatabaseModule],
  exports: [...productTypeProviders],
})
export class ProductTypeModule {}
