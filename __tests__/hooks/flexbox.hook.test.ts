import { useFlexbox } from '@/hooks/flexbox.hook';
import { FLEXBOX_DEFAULTS } from '@/models/defaults';
import { act, renderHook } from '@testing-library/react';

describe('useFlexbox', () => {
  it('should return the correct initial values', () => {
    const { result } = renderHook(() => useFlexbox());

    expect(result.current.flexboxDirection).toBe(FLEXBOX_DEFAULTS.flexDirection);
    expect(result.current.flexboxWrap).toBe(FLEXBOX_DEFAULTS.flexWrap);
    expect(result.current.flexboxJustifyContent).toBe(FLEXBOX_DEFAULTS.justifyContent);
    expect(result.current.flexboxAlignItems).toBe(FLEXBOX_DEFAULTS.alignItems);
  });

  it('should call update function when updating flexbox container', () => {
    const { result } = renderHook(() => useFlexbox());

    act(() => {
      result.current.update({ flexDirection: 'column' });
    });

    expect(result.current.flexboxDirection).toBe('column');
  });
});
