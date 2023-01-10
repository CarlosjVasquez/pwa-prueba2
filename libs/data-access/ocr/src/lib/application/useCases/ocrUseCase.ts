import { OcrResponse, OcrType } from '../../domain/entities/ocr';
import OcrRepository from '../../domain/interfaces/ocrRepository';

export const getOcrInformation = (
  ocrInterface: OcrRepository,
  data: OcrType
): Promise<OcrResponse> => {
  return ocrInterface.getOcrInformation(data);
};
