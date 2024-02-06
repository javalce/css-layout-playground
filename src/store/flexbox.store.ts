import { DEFAULT_NUM_ITEMS, FLEXBOX_DEFAULTS } from '@/models/defaults';
import type {
  FlexboxAlign,
  FlexboxAlignSelf,
  FlexboxDirection,
  FlexboxJustify,
  FlexboxWrap,
} from '@/models/layout';
import { create } from 'zustand';

interface FlexboxState {
  flexDirection: FlexboxDirection;
  flexWrap: FlexboxWrap;
  justifyContent: FlexboxJustify;
  alignItems: FlexboxAlign;
  order: number[];
  flexGrow: number[];
  flexShrink: number[];
  alignSelf: FlexboxAlignSelf[];
}

interface FlexboxStore extends FlexboxState {
  update: (state: Partial<FlexboxState>) => void;
  reset: () => void;
  addItem: () => void;
  removeItem: (index: number) => void;
}

export const useFlexboxStore = create<FlexboxStore>()((set, get) => ({
  flexDirection: FLEXBOX_DEFAULTS.flexDirection,
  flexWrap: FLEXBOX_DEFAULTS.flexWrap,
  justifyContent: FLEXBOX_DEFAULTS.justifyContent,
  alignItems: FLEXBOX_DEFAULTS.alignItems,
  order: Array.from({ length: DEFAULT_NUM_ITEMS }, () => FLEXBOX_DEFAULTS.order),
  flexGrow: Array.from({ length: DEFAULT_NUM_ITEMS }, () => FLEXBOX_DEFAULTS.flexGrow),
  flexShrink: Array.from({ length: DEFAULT_NUM_ITEMS }, () => FLEXBOX_DEFAULTS.flexShrink),
  alignSelf: Array.from({ length: DEFAULT_NUM_ITEMS }, () => FLEXBOX_DEFAULTS.alignSelf),
  update: (state) => set({ ...get(), ...state }),
  reset: () => {
    const items = Array.from({ length: DEFAULT_NUM_ITEMS });

    set({
      flexDirection: FLEXBOX_DEFAULTS.flexDirection,
      flexWrap: FLEXBOX_DEFAULTS.flexWrap,
      justifyContent: FLEXBOX_DEFAULTS.justifyContent,
      alignItems: FLEXBOX_DEFAULTS.alignItems,
      order: items.map(() => FLEXBOX_DEFAULTS.order),
      flexGrow: items.map(() => FLEXBOX_DEFAULTS.flexGrow),
      flexShrink: items.map(() => FLEXBOX_DEFAULTS.flexShrink),
      alignSelf: items.map(() => FLEXBOX_DEFAULTS.alignSelf),
    });
  },
  addItem: () => {
    const { order, flexGrow, flexShrink, alignSelf } = get();

    const newOrder = [...order, FLEXBOX_DEFAULTS.order];
    const newFlexGrow = [...flexGrow, FLEXBOX_DEFAULTS.flexGrow];
    const newFlexShrink = [...flexShrink, FLEXBOX_DEFAULTS.flexShrink];
    const newAlignSelf = [...alignSelf, FLEXBOX_DEFAULTS.alignSelf];

    set({
      order: newOrder,
      flexGrow: newFlexGrow,
      flexShrink: newFlexShrink,
      alignSelf: newAlignSelf,
    });
  },
  removeItem: (index) => {
    const { order, flexGrow, flexShrink, alignSelf } = get();

    const newOrder = [...order];
    const newFlexGrow = [...flexGrow];
    const newFlexShrink = [...flexShrink];
    const newAlignSelf = [...alignSelf];

    newOrder.splice(index, 1);
    newFlexGrow.splice(index, 1);
    newFlexShrink.splice(index, 1);
    newAlignSelf.splice(index, 1);

    set({
      order: newOrder,
      flexGrow: newFlexGrow,
      flexShrink: newFlexShrink,
      alignSelf: newAlignSelf,
    });
  },
}));
