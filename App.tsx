import React from 'react';
import { useAppLoading } from './src/hooks/useAppLoading';
import { Home } from './src/pages/Home';

export default function App() {
  const { isReady } = useAppLoading()

  if (!isReady) {
    return null
  }

  return (
    <Home />
  );
}
