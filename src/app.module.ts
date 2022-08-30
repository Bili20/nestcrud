import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { UsersModule } from './users/users.module';
import { AdminsService } from './admins/admins.service';
import { AdminsController } from './admins/admins.controller';
import { AdminsModule } from './admins/admins.module';


@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig),UsersModule, AdminsModule],
  providers: [AdminsService],
  controllers: [AdminsController]
})
export class AppModule {}
