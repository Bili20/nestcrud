import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminEntity } from './admin.entity';
import { AdminUserController } from './admin.controller';
import { AdminUserService } from './admin.service';

@Module({
    imports: [TypeOrmModule.forFeature([AdminEntity])],
    controllers: [AdminUserController],
    providers: [AdminUserService]
})
export class AdminModule {}
