import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { AdminNestService } from './admin-nest.service';
import { AdminDto } from './dto/admindto';
import { Admin } from './schema/adminschema';

@Controller('admin-nest')
export class AdminNestController {
    constructor(private readonly adminservice: AdminNestService) { };

    @Get() async findAll(): Promise<Admin[]> {
        return this.adminservice.findAll();
    };

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Admin> {
        return this.adminservice.findOne(id);
    };

    @Post()

    async create(@Body() admindto: AdminDto): Promise<Admin> {
        return this.adminservice.create(admindto)
    };

    @Put(':id')
    async update(@Param ('id') id : string, @Body() admindto : AdminDto) : Promise<Admin> {
        return this.adminservice.update(id, admindto);
    };

    @Delete(':id')

    async remove(@Param('id') id : string) : Promise<void> {
        await this.adminservice.remove(id);
    }
}
