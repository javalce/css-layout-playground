import { useLayoutStore } from '@/providers/layout';
import { useShallow } from 'zustand/react/shallow';

export const useItem = () => {
  const { addItem, orderArray, flexGrowArray, flexShrinkArray, alignSelfArray, updateFlexboxItem } =
    useLayoutStore(
      useShallow((state) => ({
        addItem: state.addItem,
        orderArray: state.order,
        flexGrowArray: state.flexGrow,
        flexShrinkArray: state.flexShrink,
        alignSelfArray: state.alignSelf,
        updateFlexboxItem: state.updateFlexboxItem,
      })),
    );

  const getFlexboxItemProperties = ({ index }: { index: number }) => {
    return {
      order: orderArray[index],
      flexGrow: flexGrowArray[index],
      flexShrink: flexShrinkArray[index],
      alignSelf: alignSelfArray[index],
    };
  };

  return {
    addItem,
    getFlexboxItem: getFlexboxItemProperties,
    updateFlexboxItem,
  };
};
