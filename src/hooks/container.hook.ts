import { useLayoutStore } from '@/store/layout.store';

export const useContainer = () => {
  const { numItems, selectItem, selectedItemIndex, removeItem, addItem } = useLayoutStore(
    (state) => ({
      numItems: state.numItems,
      selectedItemIndex: state.selectedItemIndex,
      addItem: state.addItem,
      selectItem: state.selectItem,
      removeItem: state.removeItem,
    }),
  );

  return {
    numItems,
    selectedItemIndex,
    addItem,
    selectItem,
    removeItem,
  };
};
