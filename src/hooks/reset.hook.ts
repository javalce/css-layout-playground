import { useContainerStore } from '@/store/container.store';
import { useFlexboxStore } from '@/store/flexbox.store';

export const useResetLayout = () => {
  const resetContainer = useContainerStore((state) => state.reset);
  const resetFlexbox = useFlexboxStore((state) => state.reset);

  const resetLayout = () => {
    resetContainer();
    resetFlexbox();
  };

  return { resetLayout };
};
