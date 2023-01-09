import BiometricRepositoryImp from '../repositories/biometricRepositoryImp';
import {
  validationBiometric,
  enrollmentBiometric,
  verificationBiometric,
} from '../../application/useCases/biometricUseCase';
import {
  BiometricResponse,
  BiometricRequest,
  BiometricVerificationRequest,
} from '../../domain/entities/biometric';

const api = new BiometricRepositoryImp();

export class BiometricController {
  static async verificationBiometric(
    data: BiometricVerificationRequest
  ): Promise<BiometricResponse> {
    return verificationBiometric(api, data);
  }
  static async validationBiometric(
    data: BiometricRequest
  ): Promise<BiometricResponse> {
    return validationBiometric(api, data);
  }
  static async enrollmentBiometric(
    data: BiometricRequest
  ): Promise<BiometricResponse> {
    return enrollmentBiometric(api, data);
  }
}
