import UserAuth, { MembersOnboardingType } from '../entities/userAuth';

export default interface UserAuthRepository {
  authUser(identification: MembersOnboardingType): Promise<UserAuth>;
  authUserNew(identification: any): Promise<any>;
}
