'use client';

import { useContainer } from '@/hooks/container.hook';
import { useItem } from '@/hooks/item.hook';
import { FLEXBOX_DEFAULTS } from '@/models/defaults';
import type { FlexboxItem, FlexboxItemProperty } from '@/models/layout';
import { FLEXBOX_ALIGN_SELF, FLEXBOX_ITEM_PROPERTIES } from '@/models/layout';
import { OptionsContainer } from '../options/OptionsContainer';
import { OptionsInput } from '../options/OptionsInput';
import { OptionsSelector } from '../options/OptionsSelector';

export function FlexboxItemOptions() {
  const { selectedItemIndex } = useContainer();
  const { getFlexboxItem, updateFlexboxItem } = useItem();

  if (selectedItemIndex === -1) return null;

  const { order, flexGrow, flexShrink, alignSelf } = getFlexboxItem({ index: selectedItemIndex });

  const handleUpdate = (property: string, value: unknown) => {
    updateFlexboxItem(
      selectedItemIndex,
      property as FlexboxItemProperty,
      { [property]: value } as Partial<FlexboxItem>,
    );
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
        onChange={handleUpdate}
      />
    </OptionsContainer>
  );
}
