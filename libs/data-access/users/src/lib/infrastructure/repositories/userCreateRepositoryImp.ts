import sendRequest from '@digital-products-nx/utility/axios';
import { UserEntities } from '../../domain/entities/userAuth';
import UserCreateRepository from '../../domain/interfaces/userCreateRepository';

export default class UserCreateRepositoryImp implements UserCreateRepository {
  /* TODO reemplazar por variables de entortno el client_id y el aplication_id */

  async createUser(user: UserEntities): Promise<any> {
    const endpoint = {
      host: 'nextiapikongdev.nextisolutions.com',
      port: 8443,
      ssl: true
    };
    const url = `/members/v1/members`;

    try {
      const { data } = await sendRequest(endpoint).post(url, user);
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
