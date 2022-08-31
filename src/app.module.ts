import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { UsersModule } from './users/users.module';
import { AdminsModule } from './admins/admins.module';


@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig),UsersModule, AdminsModule]
})
export class AppModule {}
