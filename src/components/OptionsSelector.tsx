import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

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
    <article className='flex flex-col gap-y-2'>
      <Label className='text-base font-semibold'>{title}</Label>
      <Select defaultValue={defaultValue} onValueChange={handleUpdateValue}>
        <SelectTrigger>
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
    </article>
  );
}
