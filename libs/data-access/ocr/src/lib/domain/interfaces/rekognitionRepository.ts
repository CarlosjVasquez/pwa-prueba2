import RekognitionEntities, { RekognitionResponse, RekognitionType } from '../entities/rekognition';
export default interface RekognitionRepository {
  getRekognitionInformation(
    data: RekognitionType
  ): Promise<RekognitionResponse>;
}
