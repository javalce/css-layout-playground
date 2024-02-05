import type { FlexboxAlignSelf } from '@/models/layout';
import {
  FLEXBOX_DEFAULTS,
  type FlexboxAlign,
  type FlexboxDirection,
  type FlexboxJustify,
  type FlexboxWrap,
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
}));
