import { Controller, Get } from '@nestjs/common';
@Controller('products')
export class ProductController {
  @Get()
  getPr(): string {
    return 'retunrn';
  }
}
