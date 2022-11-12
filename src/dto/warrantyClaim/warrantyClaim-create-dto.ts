import { IsString, IsDefined, IsNumber } from 'class-validator';

export class WarrantyClaimDto {
  @IsDefined()
  @IsString()
  productCode: string;

  @IsDefined()
  @IsString()
  customerId: string;

  @IsString()
  @IsDefined()
  customerNotes: string;

  @IsString()
  @IsDefined()
  serialNumberProduct: string;

  @IsString()
  @IsDefined()
  serialNumberPhoto: string;

  @IsString()
  @IsDefined()
  purchaseDate: string;

  @IsString()
  @IsDefined()
  receiptPhoto: string;
}
