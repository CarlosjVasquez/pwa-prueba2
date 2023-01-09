import siteConfig from './services/config';

export const drawRect = (detections, ctx) => {
  // Loop through each prediction
  detections.forEach((prediction) => {
    // Extract boxes
    const start = prediction.topLeft;
    const end = prediction.bottomRight;

    if (prediction.probability[0] > 0.99) {
      const [width, height] = [end[0] - start[0], end[1] - start[1]];
      ctx.strokeStyle = 'red';

      // Draw rectangles
      ctx.beginPath();
      ctx.lineWidth = 3;
      ctx.rect(start[0], start[1], width, height);
      ctx.stroke();
    }
  });
};

export const checkBoxesCenter = (prediction) => {
  const topLeft = prediction.topLeft;
  const bottomRight = prediction.bottomRight;
  const videoWidth = siteConfig.VIDEO_WIDTH();
  const videoHeight = siteConfig.VIDEO_HEIGHT();
  const distanceFromBorder = siteConfig.PERCENTAGE_DISTANCE_FROM_BORDER();

  if (
    topLeft[0] < (distanceFromBorder * videoWidth) / 100 ||
    topLeft[1] < (distanceFromBorder * videoHeight) / 100
  ) {
    console.error('aqui esta entrando');
    return false;
  } else if (
    bottomRight[0] > videoWidth - (distanceFromBorder * videoWidth) / 100 ||
    bottomRight[1] > videoHeight - (distanceFromBorder * videoHeight) / 100
  ) {
    console.error('validando otro erroro');
    return false;
  } else {
    return true;
  }
};

// UTIL to convert base64 to file
export const dataURLtoFile = (dataurl, filename) => {
  var arr = dataurl.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, { type: mime });
};
