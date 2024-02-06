'use client';

import { useFlexbox } from '@/hooks/flexbox.hook';
import { useContainerStore } from '@/store/container.store';
import { Item } from './Item';

export function Playground() {
  const { flexboxDirection, flexboxWrap, flexboxJustifyContent, flexboxAlignItems } = useFlexbox();
  const numItems = useContainerStore((state) => state.numItems);

  return (
    <main
      className='flex gap-10 [grid-area:playground]'
      style={{
        flexWrap: flexboxWrap,
        flexDirection: flexboxDirection,
        justifyContent: flexboxJustifyContent,
        alignItems: flexboxAlignItems,
      }}
    >
      {Array.from({ length: numItems }, (_, index) => (
        <Item key={index} index={index} />
      ))}
    </main>
  );
}
