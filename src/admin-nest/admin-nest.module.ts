import { Module } from '@nestjs/common';
import { AdminNestController } from './admin-nest.controller';

@Module({
  controllers: [AdminNestController]
})
export class AdminNestModule {}
