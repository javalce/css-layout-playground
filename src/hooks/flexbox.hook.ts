import { useLayoutStore } from '@/store/layout.store';
import { useShallow } from 'zustand/react/shallow';

export const useFlexbox = () => {
  const { flexboxDirection, flexboxWrap, flexboxJustifyContent, flexboxAlignItems, update } =
    useLayoutStore(
      useShallow((state) => ({
        flexboxDirection: state.flexDirection,
        flexboxWrap: state.flexWrap,
        flexboxJustifyContent: state.justifyContent,
        flexboxAlignItems: state.alignItems,
        update: state.updateFlexboxContainer,
      })),
    );

  return {
    flexboxDirection,
    flexboxWrap,
    flexboxJustifyContent,
    flexboxAlignItems,
    update,
  };
};
