'use client';

import { Button } from '@/components/ui/button';
import { useContainer } from '@/hooks/container.hook';

export function AddItem() {
  const { addItem } = useContainer();

  return <Button onClick={addItem}>Add Item</Button>;
}
