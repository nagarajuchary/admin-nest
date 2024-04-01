import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AdminDto } from './dto/admindto';
import { Admin } from './schema/adminschema';

@Injectable()
export class AdminNestService {
    constructor(@InjectModel('Admin') private AdminModel : Model<Admin>){};

    async findAll(): Promise<Admin[]> {
        return this.AdminModel.find().exec();
    };

    async findOne(id : string) : Promise<Admin>{
        return this.AdminModel.findById(id).exec();
    };

    async create(admindto: AdminDto) : Promise<Admin>{
       const admin = new this.AdminModel(admindto);
       return admin.save();
    };

    async update( id : string, admindto : AdminDto) : Promise<Admin>{
        return this.AdminModel.findByIdAndUpdate( id, admindto, {new:true}). exec();
    }

    async remove(id : String) : Promise<void> {
        await this.AdminModel.findByIdAndDelete(id).exec();
    }
}
