import { useContainerStore } from '@/store/container.store';
import { useFlexboxStore } from '@/store/flexbox.store';

export const useItem = () => {
  const addItemToConatiner = useContainerStore((state) => state.addItem);
  const addItemToFlexbox = useFlexboxStore((state) => state.addItem);

  const addItem = () => {
    addItemToConatiner();
    addItemToFlexbox();
  };

  return { addItem };
};
