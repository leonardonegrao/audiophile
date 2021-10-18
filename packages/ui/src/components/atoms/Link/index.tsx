import React from 'react';
import { useUIProvidersContext } from '../../../contexts/UIProvidersContext';

interface LinkProps {
  to: string;
  children: React.ReactNode;
}

export default function Link({ to, children }: LinkProps) {
  const { providers } = useUIProvidersContext();

  if (!providers?.Link) {
    throw new Error('Link provider is not configured. Use the UIProvidersContext to setup a provider!');
  }

  const LinkComponent = providers.Link;

  return <LinkComponent to={to} children={children} />;
}
