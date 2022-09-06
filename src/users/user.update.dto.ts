import { PartialType } from '@nestjs/mapped-types';
import { UsersDTO } from './users.dto';

export class UpdateUsersDTO extends PartialType(UsersDTO) {}
