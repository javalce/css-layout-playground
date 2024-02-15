import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { OptionContainer } from './OptionContainer';
import { OptionLabel } from './OptionLabel';

export function OptionsSelector({
  title,
  defaultValue,
  data,
  property,
  placeholder,
  onChange,
}: {
  title: string;
  defaultValue: string;
  data: Record<string, string>;
  property: string;
  placeholder: string;
  onChange: (property: string, value: string) => void;
}) {
  const handleUpdateValue = (value: string) => {
    onChange(property, value);
  };

  return (
    <OptionContainer>
      <OptionLabel title={title} />
      <Select defaultValue={defaultValue} onValueChange={handleUpdateValue}>
        <SelectTrigger aria-label={title}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {Object.entries(data).map(([key, value]) => (
            <SelectItem key={key} value={value}>
              {value}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </OptionContainer>
  );
}
