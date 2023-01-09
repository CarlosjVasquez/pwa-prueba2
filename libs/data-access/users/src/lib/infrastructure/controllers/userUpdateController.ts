import UserUpdateRepositoryImp from '../repositories/userUpdateRepositoryImp';
import { updateUser } from '../../application/useCases/userUpdateUseCase';
import { UserEntities } from '../../domain/entities/userAuth';

const api = new UserUpdateRepositoryImp();

export class UserUpdateController {
  static async updateUser(user: UserEntities): Promise<any> {
    return updateUser(api, user);
  }
}
