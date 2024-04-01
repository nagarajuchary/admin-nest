import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminNestModule } from './admin-nest/admin-nest.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/admin-nest'),
AdminNestModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
