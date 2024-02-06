'use client';

import { FLEXBOX_DEFAULTS } from '@/models/defaults';
import { FLEXBOX_ALIGN_SELF } from '@/models/layout';
import { useContainerStore } from '@/store/container.store';
import { useFlexboxStore } from '@/store/flexbox.store';
import { OptionsContainer } from './OptionsContainer';
import { OptionsSelector } from './OptionsSelector';
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
        <>
          <article>
            <Label>Order</Label>
            <Input
              defaultValue={order[selectedItemIndex]}
              min={FLEXBOX_DEFAULTS.order}
              type='number'
            />
          </article>
          <article>
            <Label>Flex Grow</Label>
            <Input
              defaultValue={flexGrow[selectedItemIndex]}
              min={FLEXBOX_DEFAULTS.flexGrow}
              type='number'
            />
          </article>
          <article>
            <Label>Flex Shrink</Label>
            <Input
              defaultValue={flexShrink[selectedItemIndex]}
              min={FLEXBOX_DEFAULTS.flexShrink}
              type='number'
            />
          </article>
          <OptionsSelector
            data={FLEXBOX_ALIGN_SELF}
            defaultValue={alignSelf[selectedItemIndex]}
            placeholder='Align Self'
            property='alignSelf'
            title='Align Self'
          />
        </>
      )}
    </OptionsContainer>
  );
}
