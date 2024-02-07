import type { FlexboxItemProperty } from '@/models/layout';
import { useContainerStore } from '@/store/container.store';
import type { FlexboxItem } from '@/store/flexbox.store';
import { useFlexboxStore } from '@/store/flexbox.store';

export const useItem = () => {
  const addItemToConatiner = useContainerStore((state) => state.addItem);
  const addItemToFlexbox = useFlexboxStore((state) => state.addItem);

  const orderArray = useFlexboxStore((state) => state.order);
  const flexGrowArray = useFlexboxStore((state) => state.flexGrow);
  const flexShrinkArray = useFlexboxStore((state) => state.flexShrink);
  const alignSelfArray = useFlexboxStore((state) => state.alignSelf);
  const updateItemProperty = useFlexboxStore((state) => state.updateItemProperty);

  const addItem = () => {
    addItemToConatiner();
    addItemToFlexbox();
  };

  const getFlexboxItemProperties = ({ index }: { index: number }) => {
    return {
      order: orderArray[index],
      flexGrow: flexGrowArray[index],
      flexShrink: flexShrinkArray[index],
      alignSelf: alignSelfArray[index],
    };
  };

  const updateFlexboxItemProperties = ({
    index,
    propertyName,
    property,
  }: {
    index: number;
    propertyName: FlexboxItemProperty;
    property: Partial<FlexboxItem>;
  }) => {
    updateItemProperty(index, propertyName, property);
  };

  return {
    addItem,
    getFlexboxItem: getFlexboxItemProperties,
    updateFlexboxItem: updateFlexboxItemProperties,
  };
};
