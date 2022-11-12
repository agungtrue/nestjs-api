import { IsString, IsDefined } from 'class-validator';

export class ProductTypeDto {
  @IsDefined()
  @IsString()
  name: string;
}
