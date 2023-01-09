import sendRequest from '@digital-products-nx/utility/axios';
import RekognitionRepository from '../../domain/interfaces/rekognitionRepository';
import RekognitionEntities, {
  RekognitionResponse,
  RekognitionType
} from '../../domain/entities/rekognition';

export default class RekognitionRepositoryImp implements RekognitionRepository {
  /* TODO reemplazar por variables de entortno el host y el port */


  async getRekognitionInformation(
    req: RekognitionType
  ): Promise<RekognitionResponse> {
    const endpoint = {
      host: 'nextiapikongdev.nextisolutions.com',
      port: 8443,
      ssl: true
    };
    const url = `ocr/v1/rekognition/self/check`;
    try {
      const { data: response } = await sendRequest(endpoint).post(url, req);
      return {data: response};
    } catch (error) {
      let errorMessage = 'Failed to do something exceptional';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      return { error: errorMessage };
    }
  }
}
