import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  webhook(@Body() body: any): string {
    Logger.log(body);
    return body;
  }
}
