import RekognitionEntities, {
  RekognitionResponse,
  RekognitionType
} from '../../domain/entities/rekognition';
import RekognitionRepository from '../../domain/interfaces/rekognitionRepository';

export const getRekognitionInformation = (
  rekognitionInterface: RekognitionRepository,
  data: RekognitionType
): Promise<RekognitionResponse> => {
  return rekognitionInterface.getRekognitionInformation(data);
};
