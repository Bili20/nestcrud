import { TypeOrmModuleOptions } from "@nestjs/typeorm";


export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    database: 'userDB',
    host: 'localhost',
    port: 5432,
    username: 'admin',
    password: 'admin',
    synchronize: true,
    entities: [__dirname + '/../**/*.entity{.ts,.js}']
    
}