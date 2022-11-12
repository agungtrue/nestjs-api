import { IsString, IsDefined } from 'class-validator';

export class ProductDto {
  @IsDefined()
  @IsString()
  productName: string;

  @IsDefined()
  @IsString()
  productCode: string;

  @IsString()
  @IsDefined()
  productType: string;

  @IsString()
  @IsDefined()
  brandName: string;

  @IsString()
  @IsDefined()
  serialNumber: string;

  @IsString()
  @IsDefined()
  specification: string;
}
