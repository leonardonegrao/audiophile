import React from 'react';

interface Providers {
  Link?: (props: LinkProps) => JSX.Element;
}

interface UIContextValue {
  providers?: Providers;
}

export const UIProvidersContext = React.createContext({} as UIContextValue);

export interface LinkProps {
  children: React.ReactNode;
  to: string;
}

interface UIContextProviderProps {
  children: React.ReactNode;
  providers: Providers;
}

export function UIProvidersContextProvider({ children, providers }: UIContextProviderProps) {
  return (
    <UIProvidersContext.Provider value={{
      providers: { ...providers },
    }}>
      {children}
    </UIProvidersContext.Provider>
  );
}

export function useUIProvidersContext() {
  const value = React.useContext(UIProvidersContext);

  if (value === undefined) {
    throw new Error('useUIProvidersContext must be used within a UIProvidersContextProvider');
  }

  return value;
}