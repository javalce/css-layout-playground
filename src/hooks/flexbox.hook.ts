import { useLayoutStore } from '@/store/layout.store';

export const useFlexbox = () => {
  const { flexboxDirection, flexboxWrap, flexboxJustifyContent, flexboxAlignItems, gap, update } =
    useLayoutStore((state) => ({
      flexboxDirection: state.flexDirection,
      flexboxWrap: state.flexWrap,
      flexboxJustifyContent: state.justifyContent,
      flexboxAlignItems: state.alignItems,
      gap: state.gap,
      update: state.updateFlexboxContainer,
    }));

  return {
    flexboxDirection,
    flexboxWrap,
    flexboxJustifyContent,
    flexboxAlignItems,
    gap,
    update,
  };
};
