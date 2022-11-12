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
  HttpStatus,
} from '@nestjs/common';
import { WarrantyClaimService } from './warranty-claim.service';
import { WarrantyClaimDto } from '../../dto/warrantyClaim/warrantyClaim-create-dto';
import { ActionStaffWarrantyClaimDto } from '../../dto/warrantyClaim/warrantyClaim-action-staff-dto';

@Controller('warranty-claim')
export class WarrantyClaimController {
  constructor(private warrantyClaimService: WarrantyClaimService) {}

  @Get()
  async getAllWarrantyClaim(@Res() res: any, @Query() queryParam: any) {
    try {
      const { order } = queryParam;
      const warrantyClaim =
        await this.warrantyClaimService.getAllWarrantyClaims({ order });

      return res.status(HttpStatus.OK).json({
        status: 'OK',
        total: warrantyClaim.length,
        data: warrantyClaim,
      });
    } catch (error) {
      console.error(error);
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: 'something went wrong', error: error.message });
    }
  }

  @Post()
  async createWarrantyClaim(@Res() res: any, @Body() body: WarrantyClaimDto) {
    try {
      const warrantyClaim =
        await this.warrantyClaimService.createWarrantyClaims(body);
      return res.status(HttpStatus.CREATED).json({
        status: 'CREATED',
        data: warrantyClaim,
      });
    } catch (error) {
      console.error(error);
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: 'something went wrong', error: error.message });
    }
  }

  @Patch('/:id')
  async WarrantyClaim(
    @Res() res: any,
    @Param('id') id: string,
    @Body() body: ActionStaffWarrantyClaimDto,
  ) {
    try {
      const warrantyClaim =
        await this.warrantyClaimService.updateWarrantyClaims(id, body);
      return res.status(HttpStatus.CREATED).json({
        status: 'OK',
        data: warrantyClaim,
      });
    } catch (error) {
      console.error(error);
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: 'something went wrong', error: error.message });
    }
  }
}
