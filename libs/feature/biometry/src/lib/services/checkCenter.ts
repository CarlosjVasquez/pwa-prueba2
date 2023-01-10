import biometricConfig from './config';

export const checkBoxesCenter = (prediction: any) => {
  // const DEVICE = window.innerWidth <= 600 ? 'Mobile' : 'Desktop';
  const topLeft = prediction.topLeft;
  const bottomRight = prediction.bottomRight;
  const videoWidth = biometricConfig.VIDEO_WIDTH();
  const videoHeight = biometricConfig.VIDEO_HEIGHT();
  const distanceToBorder = biometricConfig.PERCENTAGE_DISTANCE_FROM_BORDER();
  if (topLeft[0] < distanceToBorder * videoWidth / 100 || topLeft[1] < distanceToBorder * videoHeight / 100) {
    return false;
  } else if (bottomRight[0] > videoWidth - distanceToBorder * videoWidth / 100 ||
    bottomRight[1] > videoHeight - distanceToBorder * videoHeight / 100
  )
    return false;
  else {
    return true;
  }
};
