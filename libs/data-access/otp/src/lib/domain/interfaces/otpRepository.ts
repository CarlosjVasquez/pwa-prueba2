import OtpEntities, { OtpResponse, OtpValidateRequest } from '../entities/otp';
export default interface OtpRepository {
  sendOtp(data: OtpEntities): Promise<OtpResponse>;
  validateOtp(data: OtpValidateRequest): Promise<OtpResponse>;
}
