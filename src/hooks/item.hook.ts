import { useLayoutStore } from '@/store/layout.store';
import { useShallow } from 'zustand/react/shallow';

export const useItem = () => {
  const { orderArray, flexGrowArray, flexShrinkArray, alignSelfArray, updateFlexboxItem } =
    useLayoutStore(
      useShallow((state) => ({
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
    getFlexboxItem: getFlexboxItemProperties,
    updateFlexboxItem,
  };
};
