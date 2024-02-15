import {
  FLEXBOX_ALIGN,
  FLEXBOX_ALIGN_SELF,
  FLEXBOX_DIRECTIONS,
  FLEXBOX_JUSTIFY,
  FLEXBOX_WRAP,
} from './layout';

export const FLEXBOX_DEFAULTS = {
  flexDirection: FLEXBOX_DIRECTIONS.row,
  flexWrap: FLEXBOX_WRAP.wrap,
  justifyContent: FLEXBOX_JUSTIFY.flexStart,
  alignItems: FLEXBOX_ALIGN.stretch,
  gap: 10,
  order: 0,
  flexGrow: 0,
  flexShrink: 1,
  flexBasis: 'auto',
  alignSelf: FLEXBOX_ALIGN_SELF.auto,
} as const;

export const DEFAULT_NUM_ITEMS = 5;

export const DEFAULT_SELECTED_ITEM_INDEX = -1;
