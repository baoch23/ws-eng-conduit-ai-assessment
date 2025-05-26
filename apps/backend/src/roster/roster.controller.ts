import { Controller, Get, Query, BadRequestException } from '@nestjs/common';
import { RosterService } from './roster.service';
import { ApiTags, ApiQuery } from '@nestjs/swagger';

@ApiTags('roster')
@Controller('roster')
export class RosterController {
  constructor(private readonly rosterService: RosterService) {}

  @Get('')
  @ApiQuery({ name: 'userId', required: false, type: Number })
  async getRoster(@Query('userId') userId?: number) {
    if (userId && userId <= 0) {
      throw new BadRequestException({
        errorCode: 400,
        errorMsg: 'Invalid userId. It should be a positive number.',
      });
    }
    return this.rosterService.getAll(userId);
  }
}
