import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from 'src/guard/auth.guard';

@UseGuards(AuthGuard)
@Controller('hello')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  hello() {
    return this.userService.getting();
  }
}
