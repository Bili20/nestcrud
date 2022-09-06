import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString, Matches, MaxLength, MinLength } from "class-validator"
export class UsersDTO {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsEmail()
    email?: string
    
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,{
        message: 'password too weak',
    })
    password: string

    @IsBoolean()
    admin? : boolean

}