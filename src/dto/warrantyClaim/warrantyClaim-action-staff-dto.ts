import { IsString, IsDefined } from 'class-validator';

export class ActionStaffWarrantyClaimDto {
  @IsString()
  @IsDefined()
  staffNotes: string;

  @IsString()
  @IsDefined()
  status: string;
}
