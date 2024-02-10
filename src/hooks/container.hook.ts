import { useLayoutStore } from '@/providers/layout';
import { useShallow } from 'zustand/react/shallow';

export const useContainer = () => {
  const { numItems, selectItem, selectedItemIndex, removeItem } = useLayoutStore(
    useShallow((state) => ({
      numItems: state.numItems,
      selectedItemIndex: state.selectedItemIndex,
      selectItem: state.selectItem,
      removeItem: state.removeItem,
    })),
  );

  return {
    numItems,
    selectedItemIndex,
    selectItem,
    removeItem,
  };
};
