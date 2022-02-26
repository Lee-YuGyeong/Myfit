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
    jest.clearAllMocks();
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

  describe('회원 저장 save', () => {
    it('회원 저장',async ()=>{
      const dtoUser = new CreateUserDto();
      
      dtoUser.password = 'passowrd';
      dtoUser.username = '테스트 유저';

      await userController.save(dtoUser);

      expect(dtoUser.username).toEqual('테스트 유저');

      const is_hash = await bcrypt.compare('passowrd', dtoUser.password);
      expect(is_hash).toBe(true);
    })
  });

});

