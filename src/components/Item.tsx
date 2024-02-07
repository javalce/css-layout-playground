import { useItem } from '@/hooks/item.hook';
import { cn } from '@/lib/utils';
import { useContainerStore } from '@/store/container.store';

export function Item({ index, label }: { index: number; label: string }) {
  const selectedItemIndex = useContainerStore((state) => state.selectedItemIndex);
  const selectItem = useContainerStore((state) => state.selectItem);
  const { getFlexboxItem } = useItem();

  const style = getFlexboxItem({ index });

  const handleClick = () => {
    const newIndex = selectedItemIndex === index ? -1 : index;

    selectItem(newIndex);
  };

  return (
    <div
      className={cn(
        'flex size-20 cursor-pointer items-center justify-center bg-gray-200 text-2xl text-gray-800 hover:border-2 hover:border-blue-800',
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
