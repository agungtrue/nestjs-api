import { Module } from '@nestjs/common';
import { staffProviders } from './staff.providers';
import { StaffService } from './staff.service';
import { StaffController } from './staff.controller';
import { DatabaseModule } from '../database/database.module';
import { WarrantyClaimModule } from '../warranty-claim/warranty-claim.module';

@Module({
  providers: [StaffService, ...staffProviders],
  controllers: [StaffController],
  imports: [DatabaseModule, WarrantyClaimModule],
  exports: [...staffProviders],
})
export class StaffModule {}
