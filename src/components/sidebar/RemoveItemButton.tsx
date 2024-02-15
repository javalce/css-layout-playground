'use client';

import { Button } from '@/components/ui/button';
import { useContainer } from '@/hooks/container.hook';

export function RemoveItemButton() {
  const { selectedItemIndex, removeItem } = useContainer();

  return (
    <Button disabled={selectedItemIndex === -1} variant='destructive' onClick={removeItem}>
      Remove Item
    </Button>
  );
}
