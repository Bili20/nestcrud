import {Entity, Column, PrimaryGeneratedColumn, BeforeInsert, OneToOne, JoinColumn} from 'typeorm'
import * as crypto from 'crypto' 

@Entity('users')
export class UsersEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    email: string

    @BeforeInsert()
    hashPassword(){
    this.password = crypto.createHmac('sha256', this.password).digest('hex')
    }
    
    @Column()
    password: string

}