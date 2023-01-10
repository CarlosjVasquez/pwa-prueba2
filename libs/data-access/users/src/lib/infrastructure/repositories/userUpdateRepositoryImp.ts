import sendRequest from '@digital-products-nx/utility/axios';
import { UserEntities } from '../../domain/entities/userAuth';
import UserUpdateRepository from '../../domain/interfaces/userUpdateRepository';

export default class UserUpdateRepositoryImp implements UserUpdateRepository {
  /* TODO reemplazar por variables de entortno el client_id y el aplication_id */
  //http://137.184.51.162:8000/members/v1/members/self/:id
  async updateUser(user: UserEntities): Promise<any> {
    const endpoint = {
      host: 'nextiapikongdev.nextisolutions.com',
      port: 8443,
      ssl: true
    };
    const url = `/members/v1/members/self/${user.id}`;

    try {
      const { data } = await sendRequest(endpoint).put(url, user);
      return data;
    } catch (error) {
      let errorMessage = 'Failed to do something exceptional';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      throw errorMessage;
    }
  }
}
