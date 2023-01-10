import sendRequest from '@digital-products-nx/utility/axios';
import UserAuthEntities, {
  MembersOnboardingType,
} from '../../domain/entities/userAuth';
import UserAuthRepository from '../../domain/interfaces/userAuthRepository';

export default class UserAuthRepositoryImp implements UserAuthRepository {
  /* TODO reemplazar por variables de entortno el client_id y el aplication_id */

  async authUser({
    identification,
  }: MembersOnboardingType): Promise<UserAuthEntities> {
    const endpoint = {
      host: 'nextiapikongdev.nextisolutions.com',
      port: 8443,
      ssl: true,
    };
    const url = `/members/v1/members/self/${identification}`;
    try {
      const { data } = await sendRequest(endpoint).get(url);
      return data;
    } catch (error) {
      let errorMessage = 'Failed to do something exceptional';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      throw errorMessage;
    }
  }

  async authUserNew(identification: any): Promise<any> {
    const endpoint = {
      host: 'nextiapikongdev.nextisolutions.com',
      port: 8443,
      ssl: true,
    };
    const url = `/external-clients/v1/external-clients/self/${identification}`;
    try {
      const { data } = await sendRequest(endpoint).get(url);
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
