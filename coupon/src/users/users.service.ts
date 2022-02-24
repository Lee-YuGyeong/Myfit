import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "src/dto/create-user.dto";
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
  
  async findOne(id: number): Promise<CreateUserDto | undefined> {
    return this.userRepository.findOne(id);
  }
  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }
}