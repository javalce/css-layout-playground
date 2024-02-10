'use client';

import { useLayoutStore } from '@/store/layout.store';
import { Button } from './ui/button';

export function ResetLayout() {
  const reset = useLayoutStore((state) => state.reset);

  return (
    <Button variant='outline' onClick={reset}>
      Reset to defaults
    </Button>
  );
}
