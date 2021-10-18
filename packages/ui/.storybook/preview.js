import UIProvider from '../src/theme/UIProvider';
import { UIProvidersContextProvider } from '../src/contexts/UIProvidersContext';
import { addDecorator } from '@storybook/react';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#FAFAFA',
      },
      {
        name: 'dark',
        value: '#101010',
      },
    ],
  },
}

const LinkMock = (props) => <span>{props.children}</span>;

export const decorators = [
  (Story) => (
    <UIProvider>
      <UIProvidersContextProvider
        providers={{ Link: LinkMock }}
      >
        <Story />
      </UIProvidersContextProvider>
    </UIProvider>
  )
];