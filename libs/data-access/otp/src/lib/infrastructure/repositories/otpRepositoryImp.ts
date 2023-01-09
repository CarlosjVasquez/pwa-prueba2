import sendRequest from '@digital-products-nx/utility/axios';
import OtpRepository from '../../domain/interfaces/otpRepository';
import OtpEntities, { OtpResponse } from '../../domain/entities/otp';
import { OtpValidateRequest } from '../../domain/entities/otp';

export default class OtpRepositoryImp implements OtpRepository {
  /* TODO reemplazar por variables de entortno el host y el port */

  async sendOtp(req: OtpEntities): Promise<OtpResponse> {
    const endpoint = {
      host: 'nextiapikongdev.nextisolutions.com',
      port: 8443,
      ssl: true,
    };
    const url = `/sms/v1/sms/send`;
    try {
      const response: any = await sendRequest(endpoint).post(url, req);
      return { data: response.data };
    } catch (error) {
      let errorMessage = 'Failed to do something exceptional';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      return { error: errorMessage };
    }
  }

  async validateOtp(req: OtpValidateRequest): Promise<OtpResponse> {
    const endpoint = {
      host: 'nextiapikongdev.nextisolutions.com',
      port: 8443,
      ssl: true,
    };
    const url = `/sms/v1/sms/validate_otp`;
    try {
      const response: any = await sendRequest(endpoint).post(url, req);
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
