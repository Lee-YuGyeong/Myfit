import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "src/dto/create-user.dto";
import { Repository } from "typeorm";
import { User } from "./user.entity";

@Injectable()
export class UsersService {
  // private readonly users = [
  //   {
  //     userId: 1,
  //     username: "john",
  //     password: "changeme",
  //   },
  //   {
  //     userId: 2,
  //     username: "maria",
  //     password: "guess",
  //   },
  // ];
  constructor(
    @InjectRepository(User) private readonly users: Repository<User>,
  ){}

  async saveUser(userData: CreateUserDto): Promise<void> {
    await this.users.save(userData);
    return null;
  }
  
  async findOne(id: number): Promise<CreateUserDto | undefined> {
    return this.users.findOne(id);
  }
}
