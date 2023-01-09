import sendRequest from '@digital-products-nx/utility/axios';
import BiometricRepository from '../../domain/interfaces/biometricRepository';
import {
  BiometricRequest,
  BiometricResponse,
  BiometricVerificationRequest,
} from '../../domain/entities/biometric';

const ENDPOINT = {
  host: 'nextiapikongdev.nextisolutions.com',
  port: 8443,
  ssl: true,
};
const CONSTANT_URL = '/biometric/v1/biometric/self';

const BEARER_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsInNlcnZpY2UiOiJhcGlfb2NyIiwibGljZW5zZSI6IlUyRnNkR1ZrWDElMkJXJTJGQ2hyMFUlMkJCelQ2TEtkempDSVMyWXJ6VyUyRlFKQWZhOHcwd05BbTA2WDlDZGZyNmFiZ1F5ajBMNlgzSVhiTjdrdWxDejZkVXFXSkFlOHpSTGRkUDZrY2RHcGpHT1YyM25xUCUyRmJRJTJGJTJCM3RVc09KOVklMkZpYkl0RSIsImlhdCI6MTY2NDI1MTU3MywiZXhwIjoxNjk1NzkxNTczfQ.ZGEneZS6HWmzVDvuToGAsLAhjgRL8d3HTFoFUdfbWjM';

export default class BiometricRepositoryImp implements BiometricRepository {
  /* TODO reemplazar por variables de entortno el host y el port */

  async verificationBiometric(
    req: BiometricVerificationRequest
  ): Promise<BiometricResponse> {
    const url = CONSTANT_URL + '/verification';
    try {
      const response: any = await sendRequest(ENDPOINT).post(url, req, {
        headers: { Authorization: `Bearer ${BEARER_TOKEN}` },
      });
      return { data: response.data };
    } catch (error) {
      let errorMessage = 'Failed to do something exceptional';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      return { error: errorMessage };
    }
  }
  async validationBiometric(req: BiometricRequest): Promise<BiometricResponse> {
    const url = CONSTANT_URL + '/validation';
    try {
      const response: any = await sendRequest(ENDPOINT).post(url, req, {
        headers: { Authorization: `Bearer ${BEARER_TOKEN}` },
      });
      return { data: response.data };
    } catch (error) {
      console.log(error);
      let errorMessage = 'Failed to do something exceptional';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      return { error: error.response };
    }
  }
  async enrollmentBiometric(req: BiometricRequest): Promise<BiometricResponse> {
    const url = CONSTANT_URL + '/enrollment';
    try {
      const response: any = await sendRequest(ENDPOINT).post(url, req, {
        headers: { Authorization: `Bearer ${BEARER_TOKEN}` },
      });
      return { data: response.data };
    } catch (error) {
      let errorMessage = 'Failed to do something exceptional';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      return { error: errorMessage };
    }
  }
}
