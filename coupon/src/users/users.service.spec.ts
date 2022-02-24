import { Test, TestingModule } from '@nestjs/testing';
import { UserRepository } from './users.repository';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let userService;
  let userRepository;

  const mockUserRepository = () => ({
    find: jest.fn(),
    findOne: jest.fn(),
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: UserRepository,
          useFactory: mockUserRepository,
        },
    ],
    }).compile();

    userService = await module.get<UsersService>(UsersService);
    userRepository = await module.get<UserRepository>(UserRepository)

  });

  it('should be defined', () => {
    expect(userService).toBeDefined();
  });
});
