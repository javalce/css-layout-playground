import { useContainerStore } from '@/store/container.store';
import { useFlexboxStore } from '@/store/flexbox.store';

export const useItem = () => {
  const addItemToConatiner = useContainerStore((state) => state.addItem);
  const addItemToFlexbox = useFlexboxStore((state) => state.addItem);

  const orderArray = useFlexboxStore((state) => state.order);
  const flexGrowArray = useFlexboxStore((state) => state.flexGrow);
  const flexShrinkArray = useFlexboxStore((state) => state.flexShrink);
  const alignSelfArray = useFlexboxStore((state) => state.alignSelf);

  const addItem = () => {
    addItemToConatiner();
    addItemToFlexbox();
  };

  const getFlexboxItemProperties = (index: number) => {
    return {
      order: orderArray[index],
      flexGrow: flexGrowArray[index],
      flexShrink: flexShrinkArray[index],
      alignSelf: alignSelfArray[index],
    };
  };

  return { addItem, getFlexboxItem: getFlexboxItemProperties };
};
