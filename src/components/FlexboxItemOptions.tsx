'use client';

import { useContainer } from '@/hooks/container.hook';
import { useItem } from '@/hooks/item.hook';
import { FLEXBOX_DEFAULTS } from '@/models/defaults';
import { FLEXBOX_ALIGN_SELF, FLEXBOX_ITEM_PROPERTIES } from '@/models/layout';
import { OptionsContainer } from './OptionsContainer';
import { OptionsInput } from './OptionsInput';
import { OptionsSelector } from './OptionsSelector';

export function FlexboxItemOptions() {
  const { selectedItemIndex } = useContainer();
  const { getFlexboxItem } = useItem();

  if (selectedItemIndex === -1) return null;

  const { order, flexGrow, flexShrink, alignSelf } = getFlexboxItem({ index: selectedItemIndex });

  return (
    <OptionsContainer>
      <OptionsInput
        defaultValue={order}
        min={FLEXBOX_DEFAULTS.order}
        property={FLEXBOX_ITEM_PROPERTIES.order}
        title='Order'
      />
      <OptionsInput
        defaultValue={flexGrow}
        min={FLEXBOX_DEFAULTS.flexGrow}
        property={FLEXBOX_ITEM_PROPERTIES.flexGrow}
        title='Flex Grow'
      />
      <OptionsInput
        defaultValue={flexShrink}
        min={FLEXBOX_DEFAULTS.flexShrink}
        property={FLEXBOX_ITEM_PROPERTIES.flexShrink}
        title='Flex Shrink'
      />
      <OptionsSelector
        data={FLEXBOX_ALIGN_SELF}
        defaultValue={alignSelf}
        placeholder='Align Self'
        property={FLEXBOX_ITEM_PROPERTIES.alignSelf}
        title='Align Self'
      />
    </OptionsContainer>
  );
}
