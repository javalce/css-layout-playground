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
  numItems: 0,
  selectedItemIndex: -1,
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

    set({ numItems: newNumItems, selectedItemIndex: -1 });
  },
  reset: () => set({ numItems: 0, selectedItemIndex: -1 }),
}));
