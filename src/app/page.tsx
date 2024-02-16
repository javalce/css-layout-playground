import { Playground } from '@/components/playground/Playground';
import { Sidebar } from '@/components/sidebar/Sidebar';

export default function Home() {
  return (
    <div className='app gap-x-10 px-10 py-4'>
      <Sidebar />
      <Playground />
    </div>
  );
}
