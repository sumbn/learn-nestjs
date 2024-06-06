import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { GuardModule } from './guard/guard.module';

@Module({
  imports: [UserModule, GuardModule],
})
export class AppModule {}
