import Markup from '@/components/Markup';
import Playground from '@/components/Playground';
import Sidebar from '@/components/Sidebar';

export default function Home() {
  return (
    <div className='app relative h-full gap-10 px-10 py-4'>
      <Sidebar />
      <Playground />
      <Markup />
    </div>
  );
}
