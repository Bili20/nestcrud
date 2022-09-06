import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {UsersEntity} from './users.entity';
import { Repository } from 'typeorm';

import { UsersDTO } from './users.dto';
import { AdminEntity } from './admins.entity';
import { UpdateUsersDTO } from './user.update.dto';


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

   async update(id: number, data: UpdateUsersDTO){
        const user = await this.userRepository.findOne({where: {id: id}, relations: { admin: true }}) 

        user.name  = data.name ?? user.name;
        user.password  = data.password ?? user.password;
        user.email  = data.email ?? user.email;
        
        await this.userRepository.save(user);

        if(user.admin != data){
            const adm = await this.adminRepository.findOne({where:{id}})
            await this.adminRepository.delete({user})
            return adm
        }

        return user;
   }

   async destroy (id: number){
        const data = await this.userRepository.findOne({where: {id}})
        await this.userRepository.delete({id})
        return data
   }
}
