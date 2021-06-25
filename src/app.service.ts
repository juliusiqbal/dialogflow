import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/common/http';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  getHello(): string {
    return 'Hello World!';
  }

  getLocalWeather(city: string): Promise<any> {
    return this.httpService
      .get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
          appid: 'a3a69a3b9011c877ead2476b45a3a983',
          q: city,
          units: 'metric',
        },
      })
      .toPromise()
      .then((response: any) => response.data);
  }
}
