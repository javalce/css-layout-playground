'use client';

import { useFlexbox } from '@/hooks/flexbox.hook';
import {
  FLEXBOX_ALIGN,
  FLEXBOX_DIRECTIONS,
  FLEXBOX_JUSTIFY,
  FLEXBOX_LAYOUT_PROPERTIES,
  FLEXBOX_WRAP,
} from '@/models/layout';
import { OptionsContainer } from '../options/OptionsContainer';
import { OptionsInput } from '../options/OptionsInput';
import { OptionsSelector } from '../options/OptionsSelector';

export function FlexboxOptions() {
  const { flexboxDirection, flexboxWrap, flexboxJustifyContent, flexboxAlignItems, gap, update } =
    useFlexbox();

  const handleUpdate = (property: string, value: string | number) => {
    update({ [property]: value });
  };

  return (
    <OptionsContainer>
      <OptionsSelector
        data={FLEXBOX_DIRECTIONS}
        defaultValue={flexboxDirection}
        placeholder='Select flexbox direction'
        property={FLEXBOX_LAYOUT_PROPERTIES.flexDirection}
        title='Flex Direction'
        onChange={handleUpdate}
      />
      <OptionsSelector
        data={FLEXBOX_WRAP}
        defaultValue={flexboxWrap}
        placeholder='Select flexbox wrap'
        property={FLEXBOX_LAYOUT_PROPERTIES.flexWrap}
        title='Flex Wrap'
        onChange={handleUpdate}
      />
      <OptionsSelector
        data={FLEXBOX_JUSTIFY}
        defaultValue={flexboxJustifyContent}
        placeholder='Select justify content'
        property={FLEXBOX_LAYOUT_PROPERTIES.justifyContent}
        title='Justify Content'
        onChange={handleUpdate}
      />
      <OptionsSelector
        data={FLEXBOX_ALIGN}
        defaultValue={flexboxAlignItems}
        placeholder='Select align items'
        property={FLEXBOX_LAYOUT_PROPERTIES.alignItems}
        title='Align Items'
        onChange={handleUpdate}
      />
      <OptionsInput
        min={0}
        property={FLEXBOX_LAYOUT_PROPERTIES.gap}
        title='Gap'
        value={gap}
        onChange={handleUpdate}
      />
    </OptionsContainer>
  );
}
