import { Module } from '@nestjs/common';
import { AdminNestController } from './admin-nest.controller';
import { AdminNestService } from './admin-nest.service';
import { AdminSchema } from './schema/adminschema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[
    MongooseModule.forFeature([{name : 'Admin', schema : AdminSchema}]),
  ],
  controllers: [AdminNestController],
  providers: [AdminNestService]
})
export class AdminNestModule {}
