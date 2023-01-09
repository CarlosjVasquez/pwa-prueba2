import sendRequest from '@digital-products-nx/utility/axios';
import { MembersOnboardingType } from '../../domain/entities/userAuth';
import UserRepository from '../../domain/interfaces/userRepository';

export default class UserRepositoryImp implements UserRepository {
  /* TODO reemplazar por variables de entortno el client_id y el aplication_id */

  async getUserInformation({
    identification,
    fingerPrintCode,
  }: MembersOnboardingType): Promise<any> {
    //http://137.184.51.162:8000/members/v1/members/self/17171717170/check
    const endpoint = {
      host: 'nextiapikongdev.nextisolutions.com',
      port: 8443,
      ssl: true,
    };
    const url = `/members/v1/members/self/${identification}/fingerprintCode/${fingerPrintCode}/check`;

    try {
      const { data } = await sendRequest(endpoint).get(url);
      return data;
    } catch (error) {
      let errorMessage = 'Failed to do something exceptional';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      throw error.response;
    }
  }
}
