import { useItem } from '@/hooks/item.hook';
import { createWrapper } from '@/lib/test-utils';
import { LayoutStoreProvider } from '@/providers/LayoutStoreProvider';
import { act, renderHook } from '@testing-library/react';

describe('useItem', () => {
  it('should return the correct initial values', () => {
    const { result } = renderHook(() => useItem(), {
      wrapper: createWrapper(LayoutStoreProvider),
    });

    expect(result.current.getFlexboxItem({ index: 0 })).toEqual({
      order: 0,
      flexGrow: 0,
      flexShrink: 1,
      alignSelf: 'auto',
    });
  });

  it('should update flexbox item properties', () => {
    const { result } = renderHook(() => useItem(), {
      wrapper: createWrapper(LayoutStoreProvider),
    });

    act(() => {
      result.current.updateFlexboxItem(0, 'order', { order: 2 });
    });

    expect(result.current.getFlexboxItem({ index: 0 })).toEqual({
      order: 2,
      flexGrow: 0,
      flexShrink: 1,
      alignSelf: 'auto',
    });
  });
});
