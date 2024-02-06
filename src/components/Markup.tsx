'use client';

import { useFlexbox } from '@/hooks/flexbox.hook';
import { useContainerStore } from '@/store/container.store';

export function Markup() {
  const numItems = useContainerStore((state) => state.numItems);
  const { flexboxDirection, flexboxWrap, flexboxJustifyContent, flexboxAlignItems } = useFlexbox();

  const getHTMLCode = () => {
    const items = Array.from({ length: numItems }, (_, i) => `<div class="item">${i + 1}</div>`);

    let code = `<div class="container">\n`;

    items.forEach((item) => {
      code += `    ${item}\n`;
    });

    code += `</div>`;

    return code;
  };

  const getFlexboxCode = () => {
    return `.container {
    display: flex;
    flex-direction: ${flexboxDirection};
    flex-wrap: ${flexboxWrap};
    justify-content: ${flexboxJustifyContent};
    align-items: ${flexboxAlignItems};
}`;
  };

  return (
    <aside className='min-w-[400px] border border-white p-5 [grid-area:markup]'>
      <section className='flex flex-col gap-y-5'>
        <article className='border border-white p-2'>
          <pre>
            <code>{getHTMLCode()}</code>
          </pre>
        </article>
        <article className='border border-white p-2'>
          <pre>
            <code>{getFlexboxCode()}</code>
          </pre>
        </article>
      </section>
    </aside>
  );
}
