import UserCreateRepository from '../../domain/interfaces/userCreateRepository';
import {  UserEntities } from '../../domain/entities/userAuth';

export const createUser = (
  UserCreateInterface: UserCreateRepository,
  user: UserEntities
): Promise<any> => {
  return UserCreateInterface.createUser(user);
};
