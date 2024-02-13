import { useContainer } from '@/hooks/container.hook';
import { act, renderHook } from '@testing-library/react';

describe('useContainer', () => {
  it('should return the correct values from useLayoutStore', () => {
    const numItems = 5;
    const selectedItemIndex = -1;

    const { result } = renderHook(() => useContainer());

    expect(result.current.numItems).toEqual(numItems);
    expect(result.current.selectedItemIndex).toEqual(selectedItemIndex);
  });

  it('should call selectItem with the correct item index', () => {
    const { result } = renderHook(() => useContainer());
    const spy = vi.spyOn(result.current, 'selectItem');

    act(() => {
      result.current.selectItem(1);
    });

    expect(spy).toHaveBeenCalled();
  });

  it('should call addItem', () => {
    const { result } = renderHook(() => useContainer());
    const spy = vi.spyOn(result.current, 'addItem');

    act(() => {
      result.current.addItem();
    });

    expect(spy).toHaveBeenCalled();
  });

  it('should call removeItem', () => {
    const { result } = renderHook(() => useContainer());
    const spy = vi.spyOn(result.current, 'removeItem');

    act(() => {
      result.current.removeItem();
    });

    expect(spy).toHaveBeenCalled();
  });
});
