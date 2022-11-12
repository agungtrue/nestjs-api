import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { productProviders } from './product.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  providers: [ProductService, ...productProviders],
  controllers: [ProductController],
  imports: [DatabaseModule],
  exports: [...productProviders],
})
export class ProductModule {}
