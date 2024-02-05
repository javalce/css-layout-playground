import { useFlexbox } from '@/hooks/flexbox.hook';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

export default function FlexboxOption({
  title,
  defaultValue,
  data,
  property,
}: {
  title: string;
  defaultValue: string;
  data: Record<string, string>;
  property: string;
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
        <SelectTrigger className='w-[180px]'>
          <SelectValue placeholder='Select a layout type' />
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
