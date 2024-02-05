import { capitalizeFirstLetter } from '@/lib/utils';
import { LAYOUT_TYPES } from '@/models/layout';
import { FlexboxOptions } from './FlexboxOptions';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export default function Sidebar() {
  return (
    <aside className='flex flex-col gap-y-5 p-2 [grid-area:options]'>
      <Button className=''>Add Item</Button>
      <section>
        <Select defaultValue={LAYOUT_TYPES.FLEXBOX}>
          <SelectTrigger className=''>
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
      <Tabs defaultValue='container'>
        <TabsList className='grid w-full grid-cols-2'>
          <TabsTrigger value='container'>Container</TabsTrigger>
          <TabsTrigger value='item'>Item</TabsTrigger>
        </TabsList>
        <TabsContent className='mt-10' value='container'>
          <FlexboxOptions />
        </TabsContent>
        <TabsContent className='mt-10' value='item'>
          <div>Item css options</div>
        </TabsContent>
      </Tabs>
    </aside>
  );
}
