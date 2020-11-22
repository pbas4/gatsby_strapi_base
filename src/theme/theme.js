import { css } from 'styled-components';
import icons from './icons/icons';

const mediaQueryBuilder = (sizes) => Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
      ${sizes[label]} {
        ${css(...args)};
      }
    `;
  return acc;
}, {});

const fontFamily = '"Heebo", "Helvetica", "Arial", sans-serif';

const fontSize = {
  pageTitle: {
    mobile: 30,
    desktop: 60,
  },
  aboutDescription: {
    mobile: 14,
    desktop: 20,
  },
  cvItem: {
    description: {
      mobile: 12,
      desktop: 14,
    },
  },
  projectTitle: {
    mobile: 30,
    desktop: 48,
  },
  projectData: {
    description: {
      mobile: 12,
      desktop: 14,
    },
    secondaryDescription: {
      mobile: 12,
      desktop: 16,
    },
    details: {
      mobile: 12,
      desktop: 14,
    },
  },
  projectNavigation: {
    mobile: 12,
    desktop: 16,
  },
  mainMenu: 16,
  mainMenuMobile: 24,
};

const lineHeight = {
  projectData: {
    description: {
      mobile: 22,
      desktop: 25,
    },
    secondaryDescription: {
      mobile: 20,
      desktop: 30,
    },
    details: {
      mobile: 22,
      desktop: 25,
    },
  },
};

const colors = {
  beige: '#f2eadf',
  black: '#282623',
  darkBlue: '#014059',
  lightBlue: '#f2eadf',
  red: '#e94940',
};

const screenWidths = {
  sm: { width: 600 },
  md: { width: 960 },
  lg: { width: 1280 },
  xl: { width: 1920 },
};

const breakpoints = {
  sm: `@media only screen and (min-width: ${screenWidths.sm.width}px)`,
  md: `@media only screen and (min-width: ${screenWidths.md.width}px)`,
  lg: `@media only screen and (min-width: ${screenWidths.lg.width}px)`,
  xl: `@media only screen and (min-width: ${screenWidths.xl.width}px)`,
  landscape: '@media only screen and (orientation: landscape)',
  portrait: '@media only screen and (orientation: portrait)',
};

const media = mediaQueryBuilder(breakpoints);

const maxWidths = {
  content: 1250,
};

const pageMargins = {
  xs: 8,
  sm: 16,
  md: 32,
  lg: 64,
};

const theme = {
  fontFamily,
  fontSize,
  lineHeight,
  colors,
  screenWidths,
  breakpoints,
  media,
  maxWidths,
  pageMargins,
  icons: icons(),
};

export default theme;
