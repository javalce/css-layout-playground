import {
  DEFAULT_NUM_ITEMS,
  DEFAULT_SELECTED_ITEM_INDEX,
  FLEXBOX_DEFAULTS,
} from '@/models/defaults';
import { useLayoutStore } from '@/store/layout.store';
import { act, renderHook } from '@testing-library/react';

describe('LayoutStore', () => {
  it('should initialize with default values', () => {
    const { result } = renderHook(() => useLayoutStore());

    expect(result.current.numItems).toEqual(DEFAULT_NUM_ITEMS);
    expect(result.current.selectedItemIndex).toEqual(DEFAULT_SELECTED_ITEM_INDEX);
    expect(result.current.flexDirection).toEqual(FLEXBOX_DEFAULTS.flexDirection);
    // Add more assertions for the rest of the default state values
  });

  it('should select an item', () => {
    const { result } = renderHook(() => useLayoutStore());

    act(() => {
      result.current.selectItem(1);
    });

    expect(result.current.selectedItemIndex).toEqual(1);
  });

  it('should add an item', () => {
    const { result } = renderHook(() => useLayoutStore());

    act(() => {
      result.current.addItem();
    });

    expect(result.current.numItems).toEqual(DEFAULT_NUM_ITEMS + 1);
    // Add more assertions for the rest of the state values that should change
  });

  it('should remove an item', () => {
    const { result } = renderHook(() => useLayoutStore());

    act(() => {
      result.current.selectItem(1);
      result.current.removeItem();
    });

    expect(result.current.numItems).toEqual(DEFAULT_NUM_ITEMS - 1);
    // Add more assertions for the rest of the state values that should change
  });

  it('should reset to default values', () => {
    const { result } = renderHook(() => useLayoutStore());

    act(() => {
      result.current.addItem();
      result.current.addItem();
      result.current.addItem();
      result.current.addItem();

      result.current.reset();
    });

    expect(result.current.numItems).toEqual(DEFAULT_NUM_ITEMS);
    expect(result.current.selectedItemIndex).toEqual(DEFAULT_SELECTED_ITEM_INDEX);
    expect(result.current.flexDirection).toEqual(FLEXBOX_DEFAULTS.flexDirection);
    // Add more assertions for the rest of the default state values
  });

  it('should update flexbox container', () => {
    const { result } = renderHook(() => useLayoutStore());

    act(() => {
      result.current.updateFlexboxContainer({ flexDirection: 'column' });
    });

    expect(result.current.flexDirection).toEqual('column');
  });

  it('should update flexbox item', () => {
    const { result } = renderHook(() => useLayoutStore());

    act(() => {
      result.current.updateFlexboxItem(1, 'order', { order: 2 });
    });

    expect(result.current.order[1]).toEqual(2);
  });
});
