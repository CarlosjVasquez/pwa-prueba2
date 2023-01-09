import { UserEntities } from '../entities/userAuth';

export default interface UserUpdateRepository {
  updateUser(user: UserEntities): Promise<any>;
}
