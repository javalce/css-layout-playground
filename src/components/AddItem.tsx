'use client';

import { Button } from '@/components/ui/button';
import { useItem } from '@/hooks/item.hook';

export default function AddItem() {
  const { addItem } = useItem();

  return <Button onClick={addItem}>Add Item</Button>;
}
