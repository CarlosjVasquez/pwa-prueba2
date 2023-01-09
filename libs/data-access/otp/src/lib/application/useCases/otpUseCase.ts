import OtpEntities, { OtpResponse } from '../../domain/entities/otp';
import OtpRepository from '../../domain/interfaces/otpRepository';
import { OtpValidateRequest } from '../../domain/entities/otp';

export const sendOtp = (
  otpInterface: OtpRepository,
  data: OtpEntities
): Promise<OtpResponse> => {
  return otpInterface.sendOtp(data);
};

export const validateOtp = (
  otpInterface: OtpRepository,
  data: OtpValidateRequest
): Promise<OtpResponse> => {
  return otpInterface.validateOtp(data);
};
