export const LAYOUT_TYPES = {
  FLEXBOX: 'flexbox',
  GRID: 'grid',
} as const;

export const FLEXBOX_LAYOUT_PROPERTIES = {
  flexDirection: 'flexDirection',
  flexWrap: 'flexWrap',
  justifyContent: 'justifyContent',
  alignItems: 'alignItems',
} as const;

export const FLEXBOX_DIRECTIONS = {
  row: 'row',
  rowReverse: 'row-reverse',
  column: 'column',
  columnReverse: 'column-reverse',
} as const;

export type FlexboxDirection = (typeof FLEXBOX_DIRECTIONS)[keyof typeof FLEXBOX_DIRECTIONS];

export const FLEXBOX_WRAP = {
  nowrap: 'nowrap',
  wrap: 'wrap',
  wrapReverse: 'wrap-reverse',
} as const;

export type FlexboxWrap = (typeof FLEXBOX_WRAP)[keyof typeof FLEXBOX_WRAP];

export const FLEXBOX_JUSTIFY = {
  flexStart: 'flex-start',
  flexEnd: 'flex-end',
  center: 'center',
  spaceBetween: 'space-between',
  spaceAround: 'space-around',
  spaceEvenly: 'space-evenly',
} as const;

export type FlexboxJustify = (typeof FLEXBOX_JUSTIFY)[keyof typeof FLEXBOX_JUSTIFY];

export const FLEXBOX_ALIGN = {
  flexStart: 'flex-start',
  flexEnd: 'flex-end',
  center: 'center',
  baseline: 'baseline',
  stretch: 'stretch',
} as const;

export type FlexboxAlign = (typeof FLEXBOX_ALIGN)[keyof typeof FLEXBOX_ALIGN];

export const FLEXBOX_ALIGN_SELF = {
  auto: 'auto',
  flexStart: 'flex-start',
  flexEnd: 'flex-end',
  center: 'center',
  baseline: 'baseline',
  stretch: 'stretch',
} as const;

export type FlexboxAlignSelf = (typeof FLEXBOX_ALIGN_SELF)[keyof typeof FLEXBOX_ALIGN_SELF];

export const FLEXBOX_ITEM_PROPERTIES = {
  order: 'order',
  flexGrow: 'flexGrow',
  flexShrink: 'flexShrink',
  alignSelf: 'alignSelf',
} as const;

export type FlexboxItemProperty =
  (typeof FLEXBOX_ITEM_PROPERTIES)[keyof typeof FLEXBOX_ITEM_PROPERTIES];

export interface FlexboxItem {
  order: number;
  flexGrow: number;
  flexShrink: number;
  alignSelf: FlexboxAlignSelf;
}
