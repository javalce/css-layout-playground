import { useLayoutStore } from '@/store/layout.store';

export const useFlexbox = () => {
  const { flexboxDirection, flexboxWrap, flexboxJustifyContent, flexboxAlignItems, update } =
    useLayoutStore((state) => ({
      flexboxDirection: state.flexDirection,
      flexboxWrap: state.flexWrap,
      flexboxJustifyContent: state.justifyContent,
      flexboxAlignItems: state.alignItems,
      update: state.updateFlexboxContainer,
    }));

  return {
    flexboxDirection,
    flexboxWrap,
    flexboxJustifyContent,
    flexboxAlignItems,
    update,
  };
};
