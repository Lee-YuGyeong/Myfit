import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "src/dto/users/create-user.dto";
import { User } from "./user.entity";
import { UserRepository } from "./users.repository";

@Injectable()
export class UsersService {

  constructor(
    private userRepository: UserRepository,
  ){}

  async save(userData: CreateUserDto): Promise<User> {
    return this.userRepository.save(userData);
  }
  
  async findOne(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({ 
      where: { email },
    });
  }
  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }
}