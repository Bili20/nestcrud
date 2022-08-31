import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdminDTO } from './admins.dto';
import { AdminEntity } from './admins.entity'; 

@Injectable()
export class AdminsService {
    constructor(
    @InjectRepository(AdminEntity)
    private adminRepository: Repository<AdminEntity>
    ){}

    async showAll(){
        return await this.adminRepository.find()
    }

    async read(id: number){
        return await this.adminRepository.findOne({where: {id: id}})
    }

    async create(data: AdminDTO){
        const admin = this.adminRepository.create(data)
        await this.adminRepository.save(data)
        return admin 
    }

    async destroy(id: number){
        await this.adminRepository.delete({id})
        return {deleted: true}
    }
}
