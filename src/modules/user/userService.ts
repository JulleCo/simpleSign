import UserEntity from './userEntity';
import UserRepository from './userRepository';
import { User } from '@prisma/client';

class UserService {
    private userRepo : UserRepository
  constructor(userRepo : UserRepository) {
    this.userRepo = userRepo;
  }

  async getAll() {
    const users = await this.userRepo.findAllUsers();
    return users.map((user : User) => new UserEntity(user));
  }
}
export default UserService;