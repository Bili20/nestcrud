import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator"
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