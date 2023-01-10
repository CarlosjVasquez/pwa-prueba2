import UserRepositoryImp from '../repositories/userRepositoryImp';
import { getUserInformation } from '../../application/useCases/userUseCase';
import {
  UserEntities,
  MembersOnboardingType,
} from '../../domain/entities/userAuth';

const api = new UserRepositoryImp();

export class UserController {
  static async getUserInformation(
    identification: MembersOnboardingType
  ): Promise<UserEntities> {
    return getUserInformation(api, identification);
  }
}
