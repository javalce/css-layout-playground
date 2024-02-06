'use client';

import { Button } from '@/components/ui/button';
import { useContainerStore } from '@/store/container.store';

export function RemoveItem() {
  const removeItem = useContainerStore((state) => state.removeItem);
  const selectedItemIndex = useContainerStore((state) => state.selectedItemIndex);

  return (
    <Button disabled={selectedItemIndex === -1} variant='destructive' onClick={removeItem}>
      Remove Item
    </Button>
  );
}
