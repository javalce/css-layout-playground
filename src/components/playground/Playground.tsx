'use client';

import { useContainer } from '@/hooks/container.hook';
import { useFlexbox } from '@/hooks/flexbox.hook';
import { Item } from './Item';

export function Playground() {
  const { flexboxDirection, flexboxWrap, flexboxJustifyContent, flexboxAlignItems, gap } =
    useFlexbox();
  const { numItems } = useContainer();

  return (
    <main
      className='flex gap-10 [grid-area:playground]'
      style={{
        flexWrap: flexboxWrap,
        flexDirection: flexboxDirection,
        justifyContent: flexboxJustifyContent,
        alignItems: flexboxAlignItems,
        gap: `${gap.toString()}px`,
      }}
    >
      {Array.from({ length: numItems }, (_, index) => (
        <Item key={index} index={index} label={(index + 1).toString()} />
      ))}
    </main>
  );
}
