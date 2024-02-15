import { Input } from '@/components/ui/input';
import { OptionContainer } from './OptionContainer';
import { OptionLabel } from './OptionLabel';

export function OptionsInput({
  value,
  min,
  title,
  property,
  onChange,
}: {
  value: number;
  min: number;
  property: string;
  title: string;
  onChange: (property: string, value: number) => void;
}) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(property, Number(e.currentTarget.value));
  };

  return (
    <OptionContainer>
      <OptionLabel title={title} />
      <Input aria-label={title} min={min} type='number' value={value} onChange={handleChange} />
    </OptionContainer>
  );
}
