import { useContainerStore } from '@/store/container.store';

export const useContainer = () => {
  const selectedItemIndex = useContainerStore((state) => state.selectedItemIndex);

  return {
    selectedItemIndex,
  };
};
