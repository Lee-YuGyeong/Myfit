import { Controller, Get, UseGuards ,Request, Post, Body} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { UsersService } from './users.service';
import * as bcrypt from 'bcrypt';

const passowrd_hash = 10;

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
      return this.userservice.save(createUserDto);
    }

    @Get() 
    async findAll(){
      return this.userservice.findAll();
    }

    
  private async checkHash(password: string, hash_passowrd: string) : Promise<boolean>{
    return bcrypt.compare(password, hash_passowrd);
  }


  private async changeHash(password: string) : Promise<string>{
    return bcrypt.hash(password, passowrd_hash);
  }
}

