import {
  BiometricResponse,
  BiometricRequest,
  BiometricVerificationRequest,
} from '../entities/biometric';
export default interface BiometricRepository {
  verificationBiometric(
    data: BiometricVerificationRequest
  ): Promise<BiometricResponse>;
  validationBiometric(data: BiometricRequest): Promise<BiometricResponse>;
  enrollmentBiometric(data: BiometricRequest): Promise<BiometricResponse>;
}
