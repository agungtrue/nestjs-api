import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    return { status: 'OK', message: 'Welcome to NEST API' };
  }
}
