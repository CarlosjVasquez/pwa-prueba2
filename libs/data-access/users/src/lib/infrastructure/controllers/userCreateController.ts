import UserCreateRepositoryImp from '../repositories/userCreateRepositoryImp';
import { createUser } from '../../application/useCases/userCreateUseCase';
import { UserEntities } from '../../domain/entities/userAuth';

const api = new UserCreateRepositoryImp();

export class UserCreateController {
  static async createUser(user: UserEntities): Promise<any> {
    return createUser(api, user);
  }
}
