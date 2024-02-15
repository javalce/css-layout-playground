import { Label } from '@/components/ui/label';

export function OptionLabel({ title }: { title: string }) {
  return <Label className='text-base font-semibold'>{title}</Label>;
}
