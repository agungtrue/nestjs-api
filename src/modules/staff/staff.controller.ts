import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  Res,
  Query,
} from '@nestjs/common';
import { StaffService } from './staff.service';

@Controller('staff')
export class StaffController {
  constructor(private staffService: StaffService) {}

  @Get()
  async getAllStaff(@Res() res: any, @Query() queryParam: any) {
    try {
      const { order } = queryParam;
      const users = await this.staffService.getAllStaff({ order });
      return res
        .status(200)
        .json({ status: 'OK', total: users.length, data: users });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: 'something went wrong',
      });
    }
  }

  @Post('/warranty-claim/:warrantyClaimId')
  async warrantyClaimAction(
    @Body() body: any,
    @Param('warrantyClaimId') id: string,
    @Res() res: any,
  ) {
    try {
      const warrantyClaim = await this.staffService.warrantyClaimAction(
        id,
        body,
      );
      return res.status(200).json({ status: 'OK', data: warrantyClaim });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: 'something went wrong',
      });
    }
  }
}
