'use client';

import { useFlexbox } from '@/hooks/flexbox.hook';
import {
  FLEXBOX_ALIGN,
  FLEXBOX_DIRECTIONS,
  FLEXBOX_JUSTIFY,
  FLEXBOX_LAYOUT_PROPERTIES,
  FLEXBOX_WRAP,
} from '@/models/layout';
import FlexboxOption from './FlexboxOption';

export function FlexboxOptions() {
  const { flexboxDirection, flexboxWrap, flexboxJustifyContent, flexboxAlignItems } = useFlexbox();

  return (
    <section className='flex flex-col gap-y-5'>
      <FlexboxOption
        data={FLEXBOX_DIRECTIONS}
        defaultValue={flexboxDirection}
        placeholder='Select flexbox direction'
        property={FLEXBOX_LAYOUT_PROPERTIES.flexDirection}
        title='Flex Direction'
      />
      <FlexboxOption
        data={FLEXBOX_WRAP}
        defaultValue={flexboxWrap}
        placeholder='Select flexbox wrap'
        property={FLEXBOX_LAYOUT_PROPERTIES.flexWrap}
        title='Flex Wrap'
      />
      <FlexboxOption
        data={FLEXBOX_JUSTIFY}
        defaultValue={flexboxJustifyContent}
        placeholder='Select justify content'
        property={FLEXBOX_LAYOUT_PROPERTIES.justifyContent}
        title='Justify Content'
      />
      <FlexboxOption
        data={FLEXBOX_ALIGN}
        defaultValue={flexboxAlignItems}
        placeholder='Select align items'
        property={FLEXBOX_LAYOUT_PROPERTIES.alignItems}
        title='Align Items'
      />
    </section>
  );
}
