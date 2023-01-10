import OtpRepositoryImp from '../repositories/otpRepositoryImp';
import { sendOtp, validateOtp } from '../../application/useCases/otpUseCase';
import OtpEntities, {
  OtpResponse,
  OtpValidateRequest,
} from '../../domain/entities/otp';

const api = new OtpRepositoryImp();

export class OtpController {
  static async sendOtp(data: OtpEntities): Promise<OtpResponse> {
    return sendOtp(api, data);
  }

  static async validateOtp(data: OtpValidateRequest): Promise<OtpResponse> {
    return validateOtp(api, data);
  }
}
