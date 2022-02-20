import { Controller, Get, UseGuards ,Request, Post, Body} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateUserDto } from 'src/dto/create-user.dto';

@Controller('users')
export class UsersController {
    
    @UseGuards(JwtAuthGuard)
    @Get("profile")
    getProfile(@Request() req) {
      return req.user;
    }

    @Post() 
    async create(@Body() createUserDto: CreateUserDto){
        return null;
    }
}
