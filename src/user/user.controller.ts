import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('hello')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  hello() {
    return this.userService.getting();
  }
}
