'use client';

import { Button } from '@/components/ui/button';
import { useItem } from '@/hooks/item.hook';

export function AddItem() {
  const { addItem } = useItem();

  return <Button onClick={addItem}>Add Item</Button>;
}
