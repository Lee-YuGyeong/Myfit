import { Controller, Get, UseGuards ,Request, Post, Body} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { UsersService } from './users.service';

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
        return this.userservice.save(createUserDto);
    }
}
