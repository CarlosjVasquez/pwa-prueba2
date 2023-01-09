import RekognitionRepositoryImp from '../repositories/rekognitionRepositoryImp';
import { getRekognitionInformation } from '../../application/useCases/rekognitionUseCase';
import RekognitionEntities, {
  RekognitionResponse,
  RekognitionType
} from '../../domain/entities/rekognition';

const api = new RekognitionRepositoryImp();

export class RekognitionController {
  static async getRekognitionInformation(
    data: RekognitionType
  ): Promise<RekognitionResponse> {
    return getRekognitionInformation(api, data);
  }
}
