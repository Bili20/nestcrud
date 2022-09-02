import { 
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpException,
    HttpStatus,
    NotFoundException,
    Param,
    Post,
    Put,
    ValidationPipe
  } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersDTO } from './users.dto';
import { response } from 'express';


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

    @HttpCode(201)
    @Post()
    async createUser(@Body(ValidationPipe) data: UsersDTO){
        const user = await this.userService.create(data)
        return user;
    }

    @Get(':id')
    async readUser(@Param('id') id: number){
        const data = await this.userService.read(id)
        if(!data){
            // throw new HttpException('Not', HttpStatus.NOT_FOUND);
            throw new NotFoundException();
        }
        return{
            data,
        }
    }
    @Put(':id')
    async updateUser(@Param('id') id:number, @Body() data: Partial<UsersDTO>){
        const user = await this.userService.update(id, data)
        if(!user){
            throw new NotFoundException()
        }
        return{
            message: 'user atualizado',
        }
    }
    
    @Delete(':id')
    async deleteUser(@Param('id') id: number){
       const data =  await this.userService.destroy(id)
        if(!data){
            throw new NotFoundException()
        }
        return{
            message: 'user deletado',
            data
        }
    }
}
