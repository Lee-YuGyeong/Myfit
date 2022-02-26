import { Controller, Get, UseGuards ,Request, Post, Body, HttpStatus, HttpException} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateUserDto } from 'src/dto/users/create-user.dto';
import { UsersService } from './users.service';
import * as bcrypt from 'bcrypt';

const HASHKEY = 10;

@Controller('users')
export class UsersController {

    constructor(
        private readonly userservice: UsersService
      ){}
        
    @UseGuards(JwtAuthGuard)
    @Get("profile")
    getProfile(@Request() req) {
      return req.user;
    }

    @Post() 
    async save(@Body() createUserDto: CreateUserDto){
      createUserDto.password = await this.changeHash(createUserDto.password);
      const user = await this.userservice.findOne(createUserDto.email);
      if (user != undefined){
        throw new HttpException({
          status: HttpStatus.BAD_REQUEST,
          error: '이미 존제하는 회원',
        }, HttpStatus.BAD_REQUEST);
      }
      return this.userservice.save(createUserDto);
    }

    @Get() 
    async findAll(){
      return this.userservice.findAll();
    }

    
  private async checkHash(password: string, hashPassowrd: string) : Promise<boolean>{
    return bcrypt.compare(password, hashPassowrd);
  }


  private async changeHash(password: string) : Promise<string>{
    return bcrypt.hash(password, 10);
  }
}

