import { capitalizeFirstLetter } from '@/lib/utils';
import { LAYOUT_TYPES } from '@/models/layout';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

export default function Sidebar() {
  return (
    <aside className='flex flex-col [grid-area:options]'>
      <section>
        <Select defaultValue={LAYOUT_TYPES.FLEXBOX}>
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Select a layout type' />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(LAYOUT_TYPES).map(([key, value]) => (
              <SelectItem key={key} value={value}>
                {capitalizeFirstLetter(value)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </section>
    </aside>
  );
}
