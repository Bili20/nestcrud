import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from './users.entity';
import { Repository } from 'typeorm';

import { UsersDTO } from './users.dto';


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UsersEntity)
        private userRepository: Repository<UsersEntity>,
    ) {}

    async showAll(){
        return await this.userRepository.find()
    }

    async create(data: UsersDTO) {
        const user = this.userRepository.create(data)
        await this.userRepository.save(data)
        return user
    }

   async read(id: number){
        return await this.userRepository.findOne({where: {id: id}})
   }

   async update(id: number, data: Partial<UsersDTO>){
        await this.userRepository.update({id}, data)
        return await this.userRepository.findOne({where: {id: id}})
   }

   async destroy (id: number){
        await this.userRepository.delete({id})
        return {deleted: true}
   }
}
