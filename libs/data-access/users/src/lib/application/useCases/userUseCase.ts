import UserRepository from '../../domain/interfaces/userRepository';
import { MembersOnboardingType } from '../../domain/entities/userAuth';

export const getUserInformation = (
  UserInterface: UserRepository,
  identification: MembersOnboardingType
): Promise<any> => {
  return UserInterface.getUserInformation(identification);
};
