import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {UsersEntity} from './users.entity';
import { Repository } from 'typeorm';

import { UsersDTO } from './users.dto';
import { AdminEntity } from './admins.entity';


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UsersEntity)
        private userRepository: Repository<UsersEntity>,

        @InjectRepository(AdminEntity)
        private adminRepository: Repository<AdminEntity>
    ) {}

    async showAll(){
        return await this.userRepository.find({
            relations: {
                admin: true,
            }
        });
    }

    async create(data: UsersDTO): Promise<UsersEntity>{
        const user = await this.userRepository.save({ "name" : data.name, "password" : data.password, "email" : data.email})

        if (data.admin) {
            const adminUser = await this.adminRepository.save({ "user" : user });
        }
        return user
    }

   async read(id: number){
        return await this.userRepository.findOne({where: {id: id}})
   }

   async update(id: number, data: Partial <UsersDTO>){
        const user = await this.userRepository.findOne({where: {id: id}}) 
        //return await this.userRepository.update({id}, data)
   }

   async destroy (id: number){
        const data = await this.userRepository.findOne({where: {id}})
        await this.userRepository.delete({id})
        return data
   }
}
