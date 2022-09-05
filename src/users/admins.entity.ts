import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UsersEntity } from "./users.entity";

@Entity('admins')
export class AdminEntity {
    @PrimaryGeneratedColumn()
    id: number

    
    @OneToOne(() => UsersEntity, (user) => user.admin) 
    @JoinColumn({name: 'userId'})
    user: UsersEntity


}