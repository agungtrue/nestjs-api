import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

// APP
import { AppController } from './app.controller';
import { AppService } from './app.service';

// DATABASE
import { DatabaseModule } from './modules/database/database.module';

// AUTH
import { AuthService } from './modules/auth/auth.service';
import { AuthController } from './modules/auth/auth.controller';
import { AuthModule } from './modules/auth/auth.module';

// CUSTOMER
import { CustomerService } from './modules/customer/customer.service';
import { CustomerController } from './modules/customer/customer.controller';
import { CustomerModule } from './modules/customer/customer.module';

// STAFF
import { StaffService } from './modules/staff/staff.service';
import { StaffController } from './modules/staff/staff.controller';
import { StaffModule } from './modules/staff/staff.module';

// PRODUCT
import { ProductService } from './modules/product/product.service';
import { ProductModule } from './modules/product/product.module';

// PRODUCT TYPE
import { ProductTypeService } from './modules/product-type/product-type.service';
import { ProductTypeModule } from './modules/product-type/product-type.module';

// WARRANTY CLAIM
import { WarrantyClaimService } from './modules/warranty-claim/warranty-claim.service';
import { WarrantyClaimModule } from './modules/warranty-claim/warranty-claim.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    CustomerModule,
    StaffModule,
    DatabaseModule,
    ProductModule,
    ProductTypeModule,
    WarrantyClaimModule,
  ],
  controllers: [
    AppController,
    AuthController,
    CustomerController,
    StaffController,
  ],
  providers: [
    AppService,
    AuthService,
    CustomerService,
    StaffService,
    ProductService,
    ProductTypeService,
    WarrantyClaimService,
  ],
})
export class AppModule {}
