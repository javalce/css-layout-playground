import { capitalizeFirstLetter } from '@/lib/utils';
import { LAYOUT_TYPES } from '@/models/layout';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export default function Sidebar() {
  return (
    <aside className='flex flex-col gap-y-4 [grid-area:options]'>
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
      <Tabs className='w-[400px]' defaultValue='container'>
        <TabsList>
          <TabsTrigger value='container'>Container</TabsTrigger>
          <TabsTrigger value='item'>Item</TabsTrigger>
        </TabsList>
        <TabsContent value='container'>
          <div>Container css options</div>
        </TabsContent>
        <TabsContent value='item'>
          <div>Item css options</div>
        </TabsContent>
      </Tabs>
    </aside>
  );
}
