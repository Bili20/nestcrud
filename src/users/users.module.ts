import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {UsersEntity} from './users.entity';  
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { AdminEntity } from './admins.entity';


@Module({
    imports: [TypeOrmModule.forFeature([UsersEntity, AdminEntity])],
    controllers: [UsersController],
    providers: [UsersService],
})
export class UsersModule {}
