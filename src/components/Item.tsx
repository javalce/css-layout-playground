import { cn } from '@/lib/utils';
import { useContainerStore } from '@/store/container.store';

export function Item({ index }: { index: number }) {
  const selectedItemIndex = useContainerStore((state) => state.selectedItemIndex);
  const selectItem = useContainerStore((state) => state.selectItem);

  const handleClick = () => {
    selectItem(index);
  };

  return (
    <div
      className={cn('size-20 bg-gray-200 text-gray-800', {
        'border-2 border-blue-500': selectedItemIndex === index,
      })}
      onClick={handleClick}
    >
      {index}
    </div>
  );
}
