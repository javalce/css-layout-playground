import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

export default function FlexboxOption({
  title,
  defaultValue,
  data,
}: {
  title: string;
  defaultValue: string;
  data: Record<string, string>;
}) {
  return (
    <article>
      <p className='mb-2'>{title}</p>
      <Select defaultValue={defaultValue}>
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
