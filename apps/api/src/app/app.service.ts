import { Injectable } from '@nestjs/common';
import { Message } from '@angular-nest/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'This is the homepage' };
  }

  getWelcomeData(): Message {
    return {message: ' This is the welcome page'}
  }
}
