'use client';

import { useFlexbox } from '@/hooks/flexbox.hook';

export default function Playground() {
  const { flexboxDirection, flexboxWrap, flexboxJustifyContent, flexboxAlignItems } = useFlexbox();

  return (
    <main className='[grid-area:playground]'>
      <div>Playground</div>
      <div>
        <div>FlexboxDirection: {flexboxDirection}</div>
        <div>FlexboxWrap: {flexboxWrap}</div>
        <div>FlexboxJustifyContent: {flexboxJustifyContent}</div>
        <div>FlexboxAlignItems: {flexboxAlignItems}</div>
      </div>
    </main>
  );
}
