import { Controller, Get } from '@nestjs/common';

@Controller('admin')
export class AdminController {
  @Get()
  async admin () {
    return '这是一个Admin Api'
  }
}
