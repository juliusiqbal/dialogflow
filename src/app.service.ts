import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/common/http';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  getWelcome(): string {
    return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta content="IE=edge" http-equiv="X-UA-Compatible" />
            <meta content="width=device-width, initial-scale=1.0" name="viewport" />
            <title>WeatherBot</title>
            <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
        </head>
        <body>
          <df-messenger
            agent-id="1a2e2c1f-6b36-46d5-91ea-92b5adfddd5d"
            chat-title="WeatherBot"
            intent="WELCOME"
            language-code="en"
          ></df-messenger>
        </body>
      </html>
    `;
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
