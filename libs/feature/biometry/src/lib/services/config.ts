const DEVICE = ()=>{
  return window.innerWidth <= 600 ? 'Mobile' : 'Desktop';
}

// Video dimensions for different devices
const VIDEO_WIDTH = () => {
  const DEVICE_TYPE = DEVICE();
  // return DEVICE === 'Mobile' ? 300 : 1280;
  return DEVICE_TYPE === 'Mobile' ? 720 : 1280;
};
const VIDEO_HEIGHT = () => {
  const DEVICE_TYPE = DEVICE();
  // return DEVICE === 'Mobile' ? 360 : 720;
  return DEVICE_TYPE === 'Mobile' ? 640 : 720;
};

// DEVICE Based on PIXELs
// const DEVICE = typeof window !== "undefined" ? (window.innerWidth <= 600 ? 'Mobile' : 'Desktop') : 'Desktop';

// Video dimensions for different devices
// const VIDEO_WIDTH = DEVICE === 'Mobile' ? 300 : 1280;
// const VIDEO_HEIGHT = DEVICE === 'Mobile' ? 360 : 720;

// % of FACE_WIDTH & IMAGE_WIDTH
const MIN_FACE_SIZE = 25;
const MAX_FACE_SIZE = 40;


// Distance from Video BORDER to make Face CENTER during Face Search
const PERCENTAGE_DISTANCE_FROM_BORDER = ()=>{
  return DEVICE() === 'Mobile' ? 10 : 20;
}
// const PERCENTAGE_DISTANCE_FROM_BORDER = 10; // %

const biometricConfig = {
  VIDEO_HEIGHT,
  VIDEO_WIDTH,
  MIN_FACE_SIZE,
  MAX_FACE_SIZE,
  PERCENTAGE_DISTANCE_FROM_BORDER,
  DEVICE
};

export default biometricConfig;
