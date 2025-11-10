// src/main/factories/makeUserCase.ts
import { RegisterUser } from '../domain/use-cases/RegisterUser';
import { LoginUser } from '../domain/use-cases/LoginUser';
import { UpdateUser } from '../domain/use-cases/UpdateUser';
import { DeleteUser } from '../domain/use-cases/DeleteUser';
import { MockUserRepository } from '../infra/mocks/MockUserRepository';
import { FindUserByEmail } from '../domain/use-cases/FindUserById';

export const makeUserCase = () => {
  const userRepository = MockUserRepository.getInstance();

  const registerUser = new RegisterUser(userRepository);
  const loginUser = new LoginUser(userRepository);
  const updateUser = new UpdateUser(userRepository);
  const deleteUser = new DeleteUser(userRepository);
  const findByEmail = new FindUserByEmail(userRepository);

  return {
    registerUser,
    loginUser,
    updateUser,
    deleteUser,
    findByEmail
  };
};