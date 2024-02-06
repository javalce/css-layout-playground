import { DEFAULT_NUM_ITEMS, DEFAULT_SELECTED_ITEM_INDEX } from '@/models/defaults';
import { create } from 'zustand';

interface ContainerStore {
  numItems: number;
  selectedItemIndex: number;
  selectItem: (index: number) => void;
  addItem: () => void;
  removeItem: () => void;
  reset: () => void;
}

export const useContainerStore = create<ContainerStore>()((set, get) => ({
  numItems: DEFAULT_NUM_ITEMS,
  selectedItemIndex: DEFAULT_SELECTED_ITEM_INDEX,
  selectItem: (index) => set({ selectedItemIndex: index }),
  addItem: () => {
    const { numItems } = get();

    const newNumItems = numItems + 1;

    set({ numItems: newNumItems });
  },
  removeItem: () => {
    const { numItems, selectedItemIndex } = get();

    if (selectedItemIndex === -1) {
      return;
    }

    const newNumItems = numItems - 1;

    set({ numItems: newNumItems, selectedItemIndex: DEFAULT_SELECTED_ITEM_INDEX });
  },
  reset: () => set({ numItems: DEFAULT_NUM_ITEMS, selectedItemIndex: DEFAULT_SELECTED_ITEM_INDEX }),
}));
