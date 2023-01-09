import {
  BiometricResponse,
  BiometricRequest,
  BiometricVerificationRequest,
} from '../../domain/entities/biometric';
import BiometricRepository from '../../domain/interfaces/biometricRepository';

export const verificationBiometric = (
  BiometricInterface: BiometricRepository,
  data: BiometricVerificationRequest
): Promise<BiometricResponse> => {
  return BiometricInterface.verificationBiometric(data);
};

export const validationBiometric = (
  BiometricInterface: BiometricRepository,
  data: BiometricRequest
): Promise<BiometricResponse> => {
  return BiometricInterface.validationBiometric(data);
};

export const enrollmentBiometric = (
  BiometricInterface: BiometricRepository,
  data: BiometricRequest
): Promise<BiometricResponse> => {
  return BiometricInterface.enrollmentBiometric(data);
};
