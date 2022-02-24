import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "src/dto/create-user.dto";
import { Repository } from "typeorm";
import { User } from "./user.entity";

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User) private readonly users: Repository<User>,
  ){}

  async save(userData: CreateUserDto): Promise<User> {
    return this.users.save(userData);
  }
  
  async findOne(id: number): Promise<CreateUserDto | undefined> {
    return this.users.findOne(id);
  }
  async findAll(): Promise<User[]> {
    return this.users.find();
  }
}