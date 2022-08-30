import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdminEntity } from './admin.entity';

@Injectable()
export class AdminsService {
    constructor(
    @InjectRepository(AdminEntity)
    private userRepository: Repository<AdminEntity>
    ){}

    
}
