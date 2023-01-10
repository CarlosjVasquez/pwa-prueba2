import UserAuthEntities, {
  MembersOnboardingType,
} from '../../domain/entities/userAuth';
import UserAuthRepositoryImp from '../repositories/userAuthRepositoryImp';
import {
  authUser,
  authUserNew,
} from '../../application/useCases/userAuthUseCase';

const api = new UserAuthRepositoryImp();

export class UserAuthController {
  static async authUser(
    identification: MembersOnboardingType
  ): Promise<UserAuthEntities> {
    return authUser(api, identification);
  }
  static async authUserNew(identification: any): Promise<any> {
    return authUserNew(api, identification);
  }
}
