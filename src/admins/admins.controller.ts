import { 
    Body,
    Controller,
    Delete, 
    Get, 
    HttpStatus, 
    Param, 
    Post 
 } from '@nestjs/common';
import { AdminDTO } from './admins.dto';
import { AdminsService } from './admins.service';

@Controller('admins')
export class AdminsController {
    constructor(
        private adminservice: AdminsService
    ){}

    @Get()
    async showAllAdmin(){
        const admin = await this.adminservice.showAll()
        return {
            statusCode: HttpStatus.OK,
            message: 'admin buscado com sucesso!!',
            admin,
        }
    }

    @Get(':id')
    async readAdmin(@Param('id') id: number){
        const data = await this.adminservice.read(id)
        if(!data){
            return {
                statusCode: HttpStatus.NOT_FOUND,
                message: 'id não encontrado.'
            }
        }
        return {
            statusCode: HttpStatus.OK,
            message: 'admin buscado',
            data
        }
    }

    @Post()
    async createAdmin(@Body() data: AdminDTO){
        const admin = await this.adminservice.create(data)
        return{
            statusCode: HttpStatus.CREATED,
            message: 'admin criado com sucesso!!',
            admin
        }
    }

    @Delete('id')
    async destroyAdmin(@Param('id') id: number){
        const admin = await this.adminservice.destroy(id)

        if(!admin){
            return {
                statusCode: HttpStatus.NOT_FOUND,
                message: 'id não encontrado',
            }
        }
        return{
            statusCode: HttpStatus.OK,
            message: 'Deletado',

        }
    }
}