import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  
  constructor(
    private readonly appService: AppService
  ) {}

  @Get()
  getHello(): string {
    const reponse: string = this.appService.getHello();
    return reponse;
  }
}
