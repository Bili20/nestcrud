import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminEntity } from './admins.entity'; 
import { AdminsController } from './admins.controller';
import { AdminsService } from './admins.service';

@Module({
    imports: [TypeOrmModule.forFeature([AdminEntity])],
    controllers: [AdminsController],
    providers: [AdminsService],
})
export class AdminsModule {}
