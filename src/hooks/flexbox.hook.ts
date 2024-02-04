import { useFlexboxStore } from '@/store/flexbox.store';

export const useFlexbox = () => {
  const flexboxDirection = useFlexboxStore((state) => state.flexDirection);
  const flexboxWrap = useFlexboxStore((state) => state.flexWrap);
  const flexboxJustifyContent = useFlexboxStore((state) => state.justifyContent);
  const flexboxAlignItems = useFlexboxStore((state) => state.alignItems);
  const update = useFlexboxStore((state) => state.update);

  return {
    flexboxDirection,
    flexboxWrap,
    flexboxJustifyContent,
    flexboxAlignItems,
    update,
  };
};
