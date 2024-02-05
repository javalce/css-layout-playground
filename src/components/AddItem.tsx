'use client';

import { Button } from '@/components/ui/button';
import { useContainerStore } from '@/store/container.store';

export default function AddItem() {
  const addItem = useContainerStore((state) => state.addItem);

  return <Button onClick={addItem}>Add Item</Button>;
}
