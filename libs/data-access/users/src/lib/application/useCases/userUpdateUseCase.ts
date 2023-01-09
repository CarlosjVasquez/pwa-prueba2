import UserUpdateRepository from '../../domain/interfaces/userUpdateRepository';
import { UserEntities } from '../../domain/entities/userAuth';

export const updateUser = (
  UserUpdateInterface: UserUpdateRepository,
  user: UserEntities
): Promise<any> => {
  return UserUpdateInterface.updateUser(user);
};
