import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UserRepository } from './users.repository';
import { UsersService } from './users.service';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/dto/create-user.dto';

describe('UsersController', () => {
  let userController: UsersController;
  let userService: UsersService;
  let userRepository: UserRepository;

  const mockUserRepository = () => ({
    find: jest.fn(),
    findOne: jest.fn(),
    save: jest.fn(),
  });

  
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        UsersService,
        {
          provide: UserRepository,
          useFactory: mockUserRepository,
        },
    ],
    }).compile();

    userController = module.get<UsersController>(UsersController);
    userService = module.get<UsersService>(UsersService);
    userRepository = module.get<UserRepository>(UserRepository);
  });

  it('should be defined', () => {
    expect(userController).toBeDefined();
  });

  describe('회원 저정', () => {
    it('비밀 번호 해시 처리', async () => {
      const passowrd_hash = 10;
      const password = 'password';
      const hash = await bcrypt.hash(password, passowrd_hash);

      const isMatch = await bcrypt.compare(password, hash);

      expect(isMatch).toBeTruthy();
    });

    it('회원 저장',()=>{
      const dto_user = new CreateUserDto();

      dto_user.password = '123';
      dto_user.username = '테스트 유저';
      
      expect(userController.save(dto_user)).not.toEqual(null);

    })
  });

});
