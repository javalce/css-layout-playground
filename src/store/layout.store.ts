import {
  DEFAULT_NUM_ITEMS,
  DEFAULT_SELECTED_ITEM_INDEX,
  FLEXBOX_DEFAULTS,
} from '@/models/defaults';
import type {
  FlexboxAlign,
  FlexboxAlignSelf,
  FlexboxDirection,
  FlexboxItem,
  FlexboxItemProperty,
  FlexboxJustify,
  FlexboxWrap,
} from '@/models/layout';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export interface LayoutContainerState {
  numItems: number;
  selectedItemIndex: number;
}

export interface FlexboxLayoutContainerState {
  flexDirection: FlexboxDirection;
  flexWrap: FlexboxWrap;
  justifyContent: FlexboxJustify;
  alignItems: FlexboxAlign;
}

export interface FlexboxItemLayoutState {
  order: number[];
  flexGrow: number[];
  flexShrink: number[];
  alignSelf: FlexboxAlignSelf[];
}

type LayoutState = LayoutContainerState & FlexboxLayoutContainerState & FlexboxItemLayoutState;

interface LayoutActions {
  selectItem: (index: number) => void;
  addItem: () => void;
  removeItem: () => void;
  reset: () => void;
  updateFlexboxContainer: (state: Partial<FlexboxLayoutContainerState>) => void;
  updateFlexboxItem: (
    index: number,
    propertyName: FlexboxItemProperty,
    state: Partial<FlexboxItem>,
  ) => void;
}

type LayoutStore = LayoutState & LayoutActions;

function getDefaultInitialState(): LayoutState {
  return {
    numItems: DEFAULT_NUM_ITEMS,
    selectedItemIndex: DEFAULT_SELECTED_ITEM_INDEX,
    flexDirection: FLEXBOX_DEFAULTS.flexDirection,
    flexWrap: FLEXBOX_DEFAULTS.flexWrap,
    justifyContent: FLEXBOX_DEFAULTS.justifyContent,
    alignItems: FLEXBOX_DEFAULTS.alignItems,
    order: Array.from({ length: DEFAULT_NUM_ITEMS }, () => FLEXBOX_DEFAULTS.order),
    flexGrow: Array.from({ length: DEFAULT_NUM_ITEMS }, () => FLEXBOX_DEFAULTS.flexGrow),
    flexShrink: Array.from({ length: DEFAULT_NUM_ITEMS }, () => FLEXBOX_DEFAULTS.flexShrink),
    alignSelf: Array.from({ length: DEFAULT_NUM_ITEMS }, () => FLEXBOX_DEFAULTS.alignSelf),
  } as const;
}

export const useLayoutStore = create<LayoutStore>()(
  devtools(
    (set, get) => ({
      ...getDefaultInitialState(),
      selectItem: (index) => set({ selectedItemIndex: index }),
      addItem: () => {
        const { numItems, order, flexGrow, flexShrink, alignSelf } = get();

        const newNumItems = numItems + 1;
        const newOrder = [...order, FLEXBOX_DEFAULTS.order];
        const newFlexGrow = [...flexGrow, FLEXBOX_DEFAULTS.flexGrow];
        const newFlexShrink = [...flexShrink, FLEXBOX_DEFAULTS.flexShrink];
        const newAlignSelf = [...alignSelf, FLEXBOX_DEFAULTS.alignSelf];

        set({
          numItems: newNumItems,
          order: newOrder,
          flexGrow: newFlexGrow,
          flexShrink: newFlexShrink,
          alignSelf: newAlignSelf,
        });
      },
      removeItem: () => {
        const { numItems, selectedItemIndex, order, flexGrow, flexShrink, alignSelf } = get();

        if (selectedItemIndex === -1) {
          return;
        }

        const newNumItems = numItems - 1;
        const newOrder = [...order];
        const newFlexGrow = [...flexGrow];
        const newFlexShrink = [...flexShrink];
        const newAlignSelf = [...alignSelf];

        newOrder.splice(selectedItemIndex, 1);
        newFlexGrow.splice(selectedItemIndex, 1);
        newFlexShrink.splice(selectedItemIndex, 1);
        newAlignSelf.splice(selectedItemIndex, 1);

        set({
          numItems: newNumItems,
          selectedItemIndex: DEFAULT_SELECTED_ITEM_INDEX,
          order: newOrder,
          flexGrow: newFlexGrow,
          flexShrink: newFlexShrink,
          alignSelf: newAlignSelf,
        });
      },
      reset: () => set(getDefaultInitialState()),
      updateFlexboxContainer: (state) => set({ ...get(), ...state }),
      updateFlexboxItem: (index, propertyName, state) => {
        const oldState = get();

        const newState: (number | FlexboxAlignSelf)[] = [...oldState[propertyName]];
        const value = state[propertyName];

        if (value === undefined) return;

        newState.splice(index, 1, value);

        set({ [propertyName]: newState });
      },
    }),
    { name: 'layout-store' },
  ),
);
