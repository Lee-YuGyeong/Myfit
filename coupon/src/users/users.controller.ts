import { Controller, Get, UseGuards ,Request, Post, Body, HttpStatus, HttpException} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateUserDto } from 'src/dto/users/create-user.dto';
import { UsersService } from './users.service';
import { lsUserException,emailException} from 'src/exception/users-exception'
import * as bcrypt from 'bcrypt';

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
      if (this.ValidateEmail(createUserDto.email) === false){
        emailException();
      }

      createUserDto.password = await this.changeHash(createUserDto.password);
      const user = await this.userservice.findOne(createUserDto.email);

      if (user != undefined){
        lsUserException();
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

  /**
   * 비밀번호 해시변경
   * @param password 
   * @returns 
   */
  private async changeHash(password: string) : Promise<string>{
    return bcrypt.hash(password, 10);
  }
  
  /**
   * 이메일 유효성 체크
   * @param email 
   * @returns 
   */
  private ValidateEmail(email : string) : boolean{
   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
      return true;
    }else{
      return false;
    }
  }
}
