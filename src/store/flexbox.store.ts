import { FLEXBOX_DEFAULTS } from '@/models/defaults';
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
}

export const useFlexboxStore = create<FlexboxStore>()((set, get) => ({
  flexDirection: FLEXBOX_DEFAULTS.flexDirection,
  flexWrap: FLEXBOX_DEFAULTS.flexWrap,
  justifyContent: FLEXBOX_DEFAULTS.justifyContent,
  alignItems: FLEXBOX_DEFAULTS.alignItems,
  order: [],
  flexGrow: [],
  flexShrink: [],
  alignSelf: [],
  update: (state) => set({ ...get(), ...state }),
  reset: () =>
    set({
      flexDirection: FLEXBOX_DEFAULTS.flexDirection,
      flexWrap: FLEXBOX_DEFAULTS.flexWrap,
      justifyContent: FLEXBOX_DEFAULTS.justifyContent,
      alignItems: FLEXBOX_DEFAULTS.alignItems,
      order: [],
      flexGrow: [],
      flexShrink: [],
      alignSelf: [],
    }),
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
}));
