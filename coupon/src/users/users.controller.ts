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
      const hash_password = await this.change_hash(createUserDto.password);
      createUserDto.password = hash_password;
      return this.userservice.save(createUserDto);
    }


    @Get() 
    async findAll(){
      return this.userservice.findAll();
    }

    
  private async check_hash(password: string) : Promise<boolean>{
    const hash = await this.change_hash(password);

    const isMatch = bcrypt.compare(password, hash);

    return isMatch;
  }


  private async change_hash(password: string) : Promise<string>{
    const hash = await bcrypt.hash(password, passowrd_hash);
    return hash;
  }
}

