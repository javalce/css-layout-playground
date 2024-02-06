'use client';

import { useContainerStore } from '@/store/container.store';
import { useFlexboxStore } from '@/store/flexbox.store';
import { OptionsContainer } from './OptionsContainer';
import { Input } from './ui/input';
import { Label } from './ui/label';

export function FlexboxItemOptions() {
  const order = useFlexboxStore((state) => state.order);
  const flexGrow = useFlexboxStore((state) => state.flexGrow);
  const flexShrink = useFlexboxStore((state) => state.flexShrink);
  const alignSelf = useFlexboxStore((state) => state.alignSelf);
  const selectedItemIndex = useContainerStore((state) => state.selectedItemIndex);

  return (
    <OptionsContainer>
      {selectedItemIndex !== -1 && (
        <article>
          <Label>Order</Label>
          <Input defaultValue={order[selectedItemIndex]} min={0} type='number' />
        </article>
      )}
    </OptionsContainer>
  );
}
