import { Body, Controller, Get, Logger, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  webhook(@Body() body: any): any {
    Logger.log(body);
    return {
      followupEventInput: {
        name: 'hello-world',
        languageCode: 'en-US',
      },
    };
  }
}
