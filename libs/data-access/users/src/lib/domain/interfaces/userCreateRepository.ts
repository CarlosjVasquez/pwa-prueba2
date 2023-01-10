import { UserEntities } from "../entities/userAuth";

export default interface UserCreateRepository {
  createUser(user: UserEntities): Promise<any>;
}
