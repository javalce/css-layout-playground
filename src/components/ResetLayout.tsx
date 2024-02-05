import { useResetLayout } from '@/hooks/reset.hook';
import { Button } from './ui/button';

export function ResetLayout() {
  const { resetLayout } = useResetLayout();

  return (
    <Button variant='outline' onClick={resetLayout}>
      Reset to defaults
    </Button>
  );
}
