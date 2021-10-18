/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { UIProvidersContextProvider, LinkProps } from './contexts/UIProvidersContext';
import theme from './theme';

interface AllTheProvidersProps {
  providers?: any;
}  

const AllTheProviders: React.FC<AllTheProvidersProps> = ({ children, providers = {} }) => (
  <ThemeProvider theme={theme}>
    <UIProvidersContextProvider providers={{
      Link: (props: LinkProps) => <span>{props.children}</span>,
      ...providers,
    }}>
      {children}
    </UIProvidersContextProvider>
  </ThemeProvider>
);

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';
// override render method
export { customRender as render };