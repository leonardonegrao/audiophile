import React from 'react';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../GlobalStyle';
import theme from '../index';

interface UIProviderProps {
  children: React.ReactNode;
}

export default function UIProvider({ children }: UIProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}