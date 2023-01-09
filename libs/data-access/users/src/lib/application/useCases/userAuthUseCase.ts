import UserAuth, {
  MembersOnboardingType,
} from '../../domain/entities/userAuth';
import UserAuthRepository from '../../domain/interfaces/userAuthRepository';

export const authUser = (
  UserAuthInterface: UserAuthRepository,
  identification: MembersOnboardingType
): Promise<UserAuth> => {
  return UserAuthInterface.authUser(identification);
};
export const authUserNew = (
  UserAuthInterface: UserAuthRepository,
  identification: any
): Promise<any> => {
  return UserAuthInterface.authUserNew(identification);
};
