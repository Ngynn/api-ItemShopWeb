import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemModule } from './item/item.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ItemModule,
    MongooseModule.forRoot(
      'mongodb+srv://admin:long0709@cluster0.pm0wajy.mongodb.net/',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
