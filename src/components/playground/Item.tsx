'use client';

import { useContainer } from '@/hooks/container.hook';
import { useItem } from '@/hooks/item.hook';
import { cn } from '@/lib/utils';

export function Item({ index, label }: { index: number; label: string }) {
  const { selectedItemIndex, selectItem } = useContainer();
  const { getFlexboxItem } = useItem();

  const style = getFlexboxItem({ index });

  const handleClick = () => {
    const newIndex = selectedItemIndex === index ? -1 : index;

    selectItem(newIndex);
  };

  return (
    <div
      className={cn(
        'flex size-20 cursor-pointer items-center justify-center bg-gray-600 text-2xl font-medium text-white hover:border-2 hover:border-blue-800 dark:bg-gray-200 dark:text-gray-800',
        {
          'border-2 border-blue-500': selectedItemIndex === index,
        },
      )}
      style={style}
      onClick={handleClick}
    >
      {label}
    </div>
  );
}
