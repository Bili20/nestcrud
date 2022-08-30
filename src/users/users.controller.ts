import { 
    Body,
    Controller,
    Delete,
    Get,
    HttpStatus,
    Param,
    Post,
    Put
  } from '@nestjs/common';
import { UsersService } from './users.service';

import { UsersDTO } from './users.dto';


@Controller('users')
export class UsersController {
    constructor (
        private userService: UsersService
        ){}

    @Get()
    async showAllUsers(){
        const users = await this.userService.showAll()
        return {
            statusCode: HttpStatus.OK,
            message: 'users buscado com sucesso!!',
            users,
        }
    }

    @Post()
    async createUser(@Body() data: UsersDTO){
        const user = await this.userService.create(data)
        return{ 
            statusCode: HttpStatus.CREATED,
            message: 'user criado com sucesso',
            user,
        }
    }

    @Get(':id')
    async readUser(@Param('id') id: number){
        const data = await this.userService.read(id)
        if(data === null){
            return {
                statusCode: HttpStatus.NOT_FOUND,
                message: "user não existe"
            }
        }
        return{
            statusCode: HttpStatus.OK,
            message: 'user buscado com sucesso!!',
            data,
        }
    }
    @Put(':id')
    async updateUser(@Param('id') id:number, @Body() data: Partial<UsersDTO>){
        const user = await this.userService.update(id, data)
        if(user === null){
            return {
                statusCode: HttpStatus.NOT_FOUND,
                message: 'user atualizado'
            }
        }
        return{
            statusCode: HttpStatus.OK,
            message: 'user atualizado',
        }
    }
    
    @Delete(':id')
    async deleteUser(@Param('id') id: number){
        await this.userService.destroy(id)
        return{
            statusCode: HttpStatus.OK,
            message: 'user deletado',
        }
    }
}
