'use client';

import { useContainer } from '@/hooks/container.hook';
import { useItem } from '@/hooks/item.hook';
import { FLEXBOX_DEFAULTS } from '@/models/defaults';
import type { FlexboxItemProperty } from '@/models/layout';
import { FLEXBOX_ALIGN_SELF, FLEXBOX_ITEM_PROPERTIES } from '@/models/layout';
import type { FlexboxItem } from '@/store/flexbox.store';
import { OptionsContainer } from './OptionsContainer';
import { OptionsInput } from './OptionsInput';
import { OptionsSelector } from './OptionsSelector';

export function FlexboxItemOptions() {
  const { selectedItemIndex } = useContainer();
  const { getFlexboxItem, updateFlexboxItem } = useItem();

  if (selectedItemIndex === -1) return null;

  const { order, flexGrow, flexShrink, alignSelf } = getFlexboxItem({ index: selectedItemIndex });

  const handleUpdate = (property: FlexboxItemProperty, value: Partial<FlexboxItem>) => {
    updateFlexboxItem({
      index: selectedItemIndex,
      propertyName: property,
      property: value,
    });
  };

  return (
    <OptionsContainer>
      <OptionsInput
        min={FLEXBOX_DEFAULTS.order}
        property={FLEXBOX_ITEM_PROPERTIES.order}
        title='Order'
        value={order}
        onChange={handleUpdate}
      />
      <OptionsInput
        min={FLEXBOX_DEFAULTS.flexGrow}
        property={FLEXBOX_ITEM_PROPERTIES.flexGrow}
        title='Flex Grow'
        value={flexGrow}
        onChange={handleUpdate}
      />
      <OptionsInput
        min={FLEXBOX_DEFAULTS.flexShrink}
        property={FLEXBOX_ITEM_PROPERTIES.flexShrink}
        title='Flex Shrink'
        value={flexShrink}
        onChange={handleUpdate}
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
