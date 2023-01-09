import {
  OcrDocumentResponse,
  OcrDocumentRequest,
} from '../../domain/entities/ocrDocument';
import OcrDocumentRepository from '../../domain/interfaces/ocrDocumentRepository';

export const getOcrDocumentInformation = (
  ocrDocumentInterface: OcrDocumentRepository,
  data: OcrDocumentRequest
): Promise<OcrDocumentResponse> => {
  return ocrDocumentInterface.getOcrDocumentInformation(data);
};

export const sendPDF = (sendPDFInterface: any, data: any): Promise<any> => {
  return sendPDFInterface.sendPDF(data);
};
