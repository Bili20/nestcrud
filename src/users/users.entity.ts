import {Entity, Column, PrimaryGeneratedColumn, BeforeInsert, OneToOne, JoinColumn, Admin} from 'typeorm'
import { AdminEntity } from './admins.entity'

@Entity('users')
export class UsersEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    email: string
    
    @Column()
    password: string

    @OneToOne(() => AdminEntity, (admin) => admin.user)
    admin: AdminEntity
}