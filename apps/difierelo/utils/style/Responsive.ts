const sizes = {
  phone: "576px",
  tablet: "768px",
  smallLaptop: "998px",
  laptop: "1200px",
  desktop: "1440px",
};

const Responsive = {
  SM: `@media(max-width: ${sizes.phone})`,
  MD: `@media(max-width: ${sizes.tablet})`,
  LG: `@media(max-width: ${sizes.smallLaptop})`,
  XL: `@media(max-width: ${sizes.laptop})`,
  XXL: `@media(max-width: ${sizes.desktop})`,
};

export default Responsive;
