import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { NoteModule } from './note/note.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [AuthModule, UserModule, NoteModule, ProductModule, ProductModule],
})
export class AppModule {}
