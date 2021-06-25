import { Body, Controller, Get, Post } from '@nestjs/common';

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
    return this.appService
      .getLocalWeather(body?.queryResult?.parameters?.city)
      .then((response: any) => ({
        followupEventInput: {
          languageCode: 'en-US',
          name: 'display-local-weather',
          parameters: {
            temperature: response?.main?.temp,
          },
        },
      }));
  }
}
