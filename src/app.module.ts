import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminNestModule } from './admin-nest/admin-nest.module';

@Module({
  imports: [AdminNestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
