import { IsString, IsEmail, IsDefined } from 'class-validator';

export class AuthCustomerDto {
  @IsString()
  @IsDefined()
  username: string;

  @IsDefined()
  @IsEmail()
  email: string;

  @IsString()
  @IsDefined()
  phone: string;

  @IsString()
  @IsDefined()
  address: string;

  @IsString()
  @IsDefined()
  password: string;
}
