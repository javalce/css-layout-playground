import {
  FLEXBOX_ALIGN,
  FLEXBOX_DIRECTIONS,
  FLEXBOX_JUSTIFY,
  FLEXBOX_WRAP,
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
}

interface FlexboxStore extends FlexboxState {
  update: (state: Partial<FlexboxState>) => void;
}

export const useFlexboxStore = create<FlexboxStore>()((set, get) => ({
  flexDirection: FLEXBOX_DIRECTIONS.row,
  flexWrap: FLEXBOX_WRAP.wrap,
  justifyContent: FLEXBOX_JUSTIFY.flexStart,
  alignItems: FLEXBOX_ALIGN.stretch,
  update: (state) => set({ ...get(), ...state }),
}));
