import { Module } from '@nestjs/common';
import { WarrantyClaimController } from './warranty-claim.controller';
import { WarrantyClaimService } from './warranty-claim.service';
import { warrantyClaimProviders } from './warranty-claim.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  controllers: [WarrantyClaimController],
  providers: [WarrantyClaimService, ...warrantyClaimProviders],
  imports: [DatabaseModule],
  exports: [...warrantyClaimProviders],
})
export class WarrantyClaimModule {}
