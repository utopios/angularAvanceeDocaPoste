import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { ContactController } from './contact/contact.controller';

@Module({
  imports: [ProductModule],
  controllers: [AppController, ContactController],
  providers: [AppService],
})
export class AppModule {}
