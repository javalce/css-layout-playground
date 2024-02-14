'use client';

import { LayoutStoreContext, initializeStore, type LayoutStoreApi } from '@/store/layout.store';
import { useRef } from 'react';

export function LayoutStoreProvider({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<LayoutStoreApi>();

  if (!storeRef.current) {
    storeRef.current = initializeStore();
  }

  return (
    <LayoutStoreContext.Provider value={storeRef.current}>{children}</LayoutStoreContext.Provider>
  );
}
