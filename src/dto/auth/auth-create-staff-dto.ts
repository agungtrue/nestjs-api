import { IsString, IsEmail, IsDefined } from 'class-validator';

export class AuthStaffDto {
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
  password: string;
}
