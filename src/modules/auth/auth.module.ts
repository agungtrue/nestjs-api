import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
// import { customerProviders } from './auth.providers';

// module
import { DatabaseModule } from '../database/database.module';
import { CustomerModule } from '../customer/customer.module';
import { StaffModule } from '../staff/staff.module';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [DatabaseModule, CustomerModule, StaffModule],
})
export class AuthModule {}
