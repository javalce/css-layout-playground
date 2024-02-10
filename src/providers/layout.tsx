'use client';

import { createLayoutStore, type LayoutStore, type LayoutStoreApi } from '@/store/layout.store';
import { createContext, useContext, useRef } from 'react';
import { useStore as useZustandStore } from 'zustand';

const LayoutStoreContext = createContext<LayoutStoreApi | null>(null);

export function LayoutStoreProvider({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<LayoutStoreApi>();

  if (!storeRef.current) {
    storeRef.current = createLayoutStore();
  }

  return (
    <LayoutStoreContext.Provider value={storeRef.current}>{children}</LayoutStoreContext.Provider>
  );
}

export function useLayoutStore<T>(selector: (store: LayoutStore) => T) {
  const store = useContext(LayoutStoreContext);

  if (!store) {
    throw new Error('useStore must be used within a LayoutStoreProvider');
  }

  return useZustandStore(store, selector);
}
