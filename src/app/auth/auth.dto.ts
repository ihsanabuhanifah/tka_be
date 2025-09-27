import { PartialType, PickType } from "@nestjs/mapped-types";
import { IsEmail, IsInt, IsString, Length, MinLength } from "class-validator";

export class UserDto {
  @IsInt()
  id: number;

  @IsString()
  name: string;

  @IsString()
  foto_profile: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;

  @IsString()
  refresh_token: string;

  @IsString()
  role: string;
}

export class LoginDto extends PickType(UserDto, [
  "email",
  "password",
]) {}

export class LoginGoogleDto extends PickType(UserDto, [
  "email",
  "name",
  "foto_profile",
]) {}