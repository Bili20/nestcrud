import { 
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    NotFoundException,
    Param,
    Post,
    Put,
    ValidationPipe
  } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersDTO } from './users.dto';
import { UpdateUsersDTO } from './user.update.dto';


@Controller('users')
export class UsersController {
    constructor (
        private userService: UsersService
        ){}

    @Get()
    async showAllUsers(){
        const users = await this.userService.showAll()
        return {
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
            throw new NotFoundException();
        }
        return{
            data,
        }
    }
    @Put(':id')
    async updateUser(@Param('id') id:number, @Body(ValidationPipe) data: UpdateUsersDTO){
        if(!data){
             throw new NotFoundException()
        }
        await this.userService.update(id, data)
        return data
         
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
