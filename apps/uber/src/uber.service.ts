import { Injectable } from '@nestjs/common';

@Injectable()
export class UberService {
  getHello(): string {
    return 'Hello World!';
  }
}
