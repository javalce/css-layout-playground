'use client';

import { useLayoutStore } from '@/providers/layout';
import { Button } from './ui/button';

export function ResetLayout() {
  const reset = useLayoutStore((state) => state.reset);

  return (
    <Button variant='outline' onClick={reset}>
      Reset to defaults
    </Button>
  );
}
