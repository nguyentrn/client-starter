export const size = {
  mobile: 480,
  tablet: 768,
  laptop: 1024,
  widescreen: 1200,
  superwidescreen: 1600,
  fuckheight: 300,
};

export default {
  mobile: `@media screen and (min-width: ${size.mobile}px)`,
  tablet: `@media screen and (min-width: ${size.tablet}px)`,
  laptop: `@media screen and (min-width: ${size.laptop}px)`,
  widescreen: `@media screen and (min-width: ${size.widescreen}px)`,
  superwidescreen: `@media screen and (min-width: ${size.superwidescreen}px)`,
  maxHeight: `@media screen and (max-height: ${size.fuckheight}px)`,
};
