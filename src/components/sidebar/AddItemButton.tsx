'use client';

import { Button } from '@/components/ui/button';
import { useContainer } from '@/hooks/container.hook';

export function AddItemButton() {
  const { addItem } = useContainer();

  return <Button onClick={addItem}>Add Item</Button>;
}
