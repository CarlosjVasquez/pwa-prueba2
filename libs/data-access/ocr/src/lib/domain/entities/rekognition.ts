export default class Rekognition {
  percent: number;

  constructor() {
    this.percent = 0;
  }
}

export type RekognitionType = {
  source: string;
  target: string;
};


export type RekognitionResponse = {
  error?: any;
  data?: any
}
