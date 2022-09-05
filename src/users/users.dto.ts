import { IsBoolean, IsEmail, IsEmpty, IsNotEmpty, IsString } from "class-validator"
export class UsersDTO {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsEmail()
    email?: string
    
    @IsString()
    password: string

    @IsBoolean()
    admin? : boolean

}