'use client';

import { Button } from '@/components/ui/button';
import { useLayoutStore } from '@/store/layout.store';

export function ResetLayoutButton() {
  const reset = useLayoutStore((state) => state.reset);

  return (
    <Button variant='outline' onClick={reset}>
      Reset to defaults
    </Button>
  );
}
