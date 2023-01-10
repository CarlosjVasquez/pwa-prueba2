import { MembersOnboardingType } from "../entities/userAuth";

export default interface UserAuthRepository {
  getUserInformation(identification: MembersOnboardingType): Promise<any>;
}
