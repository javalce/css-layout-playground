'use client';

import { FLEXBOX_ALIGN, FLEXBOX_DIRECTIONS, FLEXBOX_JUSTIFY, FLEXBOX_WRAP } from '@/models/layout';
import { useFlexboxStore } from '@/store/flexbox.store';
import FlexboxOption from './FlexboxOption';

export function FlexboxOptions() {
  const flexboxDirection = useFlexboxStore((state) => state.flexDirection);
  const flexboxWrap = useFlexboxStore((state) => state.flexWrap);
  const flexboxJustifyContent = useFlexboxStore((state) => state.justifyContent);
  const flexboxAlignItems = useFlexboxStore((state) => state.alignItems);

  return (
    <section className='flex flex-col gap-y-5'>
      <FlexboxOption
        data={FLEXBOX_DIRECTIONS}
        defaultValue={flexboxDirection}
        title='Flex Direction'
      />
      <FlexboxOption data={FLEXBOX_WRAP} defaultValue={flexboxWrap} title='Flex Wrap' />
      <FlexboxOption
        data={FLEXBOX_JUSTIFY}
        defaultValue={flexboxJustifyContent}
        title='Justify Content'
      />
      <FlexboxOption data={FLEXBOX_ALIGN} defaultValue={flexboxAlignItems} title='Align Items' />
    </section>
  );
}
