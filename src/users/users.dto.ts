import { IsString } from "class-validator"
export class UsersDTO {
    id: number

    @IsString()
    name: string

    email?: string
    
    password: string
}