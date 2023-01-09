/* eslint-disable-next-line */
export class UiBreakpoints {
  static sizes = {
    xs: 0,
    sm: 576,
    md: 768, // Mobile Large
    lg: 992, // Desktop Small
    xl: 1200, // Desktop Medium
    xxl: 1400, // Desktop Large
    xxxl: 1600, // Desktop Large
  };

  static media = {
    xs: `(min-width: ${UiBreakpoints.sizes.xs}px)`,
    sm: `(min-width: ${UiBreakpoints.sizes.sm}px)`,
    md: `(min-width: ${UiBreakpoints.sizes.md}px)`,
    lg: `(min-width: ${UiBreakpoints.sizes.lg}px)`,
    xl: `(min-width: ${UiBreakpoints.sizes.xl}px)`,
    xxl: `(min-width: ${UiBreakpoints.sizes.xxl}px)`,
    xxxl: `(min-width: ${UiBreakpoints.sizes.xxxl}px)`,
  };

  static colors = {
    primary: '#12CF61',
    secondary: '#1F3F4A',
    tertiary: '#26505E',
    dark: '#0F2437',
    bgBody: '#E5E5E5',
    bgIcons: '#DBF8E7',
    bgBlocks: '#F8F8F7',
    textPrimary: '#152738',
    textSecondary: '#FFFFFF',
    textTertiary: '#4A4A4A',
    textQuaternary: '#234854',
    textDark: '#576468',
    borderPrimary: '#E8E8E5',
    borderSecondary: '#1C3851',
    lightGray: '#A1ADB1',
    green: '#22D16B',
    lightGreen: '#E1FBEC',
  };
  static fonts = {
    primaryFont: 'Eina 02',
    secondaryFont: 'Azeret Mono',
  };

  static images = {
    logo: '/assets/logos/Logo.png',
    topComponentPrimary: '/assets/img/topComponentPrimary.png',
    topComponentSecondary: '/assets/img/topComponentSecondary.png',
    topComponentTertiary: '/assets/img/topComponentTertiary.png',
    bannerSavingsAccount: '/assets/img/bannersavingsaccount.png',
    iconSavingsAccount: '/assets/img/pigicon.svg',
    topSavingsAccount: '/assets/img/imagecapctaahorro.png',
    benefits1: '/assets/img/benefits1.png',
    benefits2: '/assets/img/benefits2.png',
    backdark1: '/assets/img/backdark1.png',
    contactUs: '/assets/img/imageContactUs.png',
    history1: '/assets/img/history1.png',
    history2: '/assets/img/history2.png',
    history3: '/assets/img/history3.png',
    savingsGuy: '/assets/img/savingsGuy.png',
    comoFunciona: '/assets/img/comoFunciona.png',
    testimonial: '/assets/img/testimonial.png',
    loansHero: '/assets/img/loansHero.png',
    creditCouple: '/assets/img/creditCouple.png',
    womanLaptop: '/assets/img/womanLaptop.png',
    inversionSlider: '/assets/img/inversionSlider.png',
    womanLaptop2: '/assets/img/womanLaptop2.png',
    womanLaptop3: '/assets/img/womanLaptop3.png',
    womanCreditCard: '/assets/img/womanCreditCard.png',
    creditCardReader: '/assets/img/creditCardReader.png',
    womanCreditCard2: '/assets/img/womanCreditCard2.png',
    girlWithPhone: '/assets/img/girlWithPhone.png',
    coopDauleLogo: '/assets/logos/CoopDauleLogo.png',
  };
}

export default UiBreakpoints;
