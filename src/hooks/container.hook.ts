import { useLayoutStore } from '@/store/layout.store';
import { useShallow } from 'zustand/react/shallow';

export const useContainer = () => {
  const { numItems, selectItem, selectedItemIndex, removeItem, addItem } = useLayoutStore(
    useShallow((state) => ({
      numItems: state.numItems,
      selectedItemIndex: state.selectedItemIndex,
      addItem: state.addItem,
      selectItem: state.selectItem,
      removeItem: state.removeItem,
    })),
  );

  return {
    numItems,
    selectedItemIndex,
    addItem,
    selectItem,
    removeItem,
  };
};
