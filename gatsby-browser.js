/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ResolutionProvider } from './src/providers/ResolutionProvider';
import theme from './src/theme/theme';
import GlobalStyles from './src/theme/globalStyles';

// eslint-disable-next-line react/prop-types
// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <ResolutionProvider>
      <GlobalStyles />
      {element}
    </ResolutionProvider>
  </ThemeProvider>
);
