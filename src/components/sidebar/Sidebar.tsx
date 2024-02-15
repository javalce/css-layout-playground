import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AddItem } from './AddItem';
import { FlexboxItemOptions } from './FlexboxItemOptions';
import { FlexboxOptions } from './FlexboxOptions';
import { RemoveItem } from './RemoveItem';

export function Sidebar() {
  return (
    <aside className='flex flex-col gap-y-5 p-2 [grid-area:options]'>
      <AddItem />
      <RemoveItem />
      <Tabs defaultValue='container'>
        <TabsList className='grid w-full grid-cols-2'>
          <TabsTrigger value='container'>Container</TabsTrigger>
          <TabsTrigger value='item'>Item</TabsTrigger>
        </TabsList>
        <TabsContent className='mt-5' value='container'>
          <FlexboxOptions />
        </TabsContent>
        <TabsContent className='mt-5' value='item'>
          <FlexboxItemOptions />
        </TabsContent>
      </Tabs>
    </aside>
  );
}