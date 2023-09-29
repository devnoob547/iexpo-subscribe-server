/* eslint-disable indent */
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateEnrollmentDTO {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;
}
