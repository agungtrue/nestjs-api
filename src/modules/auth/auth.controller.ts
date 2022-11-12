import { Controller, Post, Body, Param, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCustomerDto } from '../../dto/auth/auth-create-customer-dto';
import { AuthStaffDto } from '../../dto/auth/auth-create-staff-dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // customer
  @Post('/signup/customer')
  async signUpCustomer(@Body() body: AuthCustomerDto, @Res() res: any) {
    try {
      // validate if email or phone already exist
      const isUserExist = await this.authService.isCustomerExist(body);

      if (isUserExist) {
        return res.status(400).json({ message: 'Customer already exist' });
      }

      // create new customer using create method from authService
      const user = await this.authService.create(body);
      // const create = body;
      // console.log({ create });
      return res.status(201).json({
        status: 201,
        message: 'Successfully create Customer',
        user,
      });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: 'something went wrong', error: error.message });
    }
  }

  @Post('/signin')
  signIn(@Body() body: any) {
    return { message: 'signIn', body };
  }

  // staff
  @Post('/signup/staff')
  async signUpStaff(@Body() body: AuthStaffDto, @Res() res: any) {
    try {
      // validate if email or phone already exist
      const isUserExist = await this.authService.isStaffExist(body);

      if (isUserExist) {
        return res.status(400).json({ message: 'Staff already exist' });
      }

      // create new customer using create method from authService
      const user = await this.authService.createStaff(body);
      // const create = body;
      // console.log({ create });
      return res.status(201).json({
        status: 201,
        message: 'Successfully create Staff',
        user,
      });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: 'something went wrong', error: error.message });
    }
  }
}
