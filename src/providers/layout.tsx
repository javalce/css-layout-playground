'use client';

import { createLayoutStore, type LayoutStoreApi } from '@/store/layout.store';
import { createContext, useRef } from 'react';

export const LayoutStoreContext = createContext<LayoutStoreApi | null>(null);

export function LayoutStoreProvider({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<LayoutStoreApi>();

  if (!storeRef.current) {
    storeRef.current = createLayoutStore();
  }

  return (
    <LayoutStoreContext.Provider value={storeRef.current}>{children}</LayoutStoreContext.Provider>
  );
}
