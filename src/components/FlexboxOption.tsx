import { useFlexbox } from '@/hooks/flexbox.hook';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

export function FlexboxOption({
  title,
  defaultValue,
  data,
  property,
  placeholder,
}: {
  title: string;
  defaultValue: string;
  data: Record<string, string>;
  property: string;
  placeholder: string;
}) {
  const { update } = useFlexbox();

  const handleUpdateValue = (value: string) => {
    update({
      [property]: value,
    });
  };

  return (
    <article>
      <p className='mb-2 text-lg font-medium'>{title}</p>
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
