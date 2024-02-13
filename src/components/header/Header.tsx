'use client';

import { GithubIcon } from '@/components/icons/Github';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { ResetLayoutButton } from './ResetLayoutButton';
import { ThemeToggleButton } from './ThemeToggleButton';

export function Header() {
  return (
    <header className='w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-14 max-w-screen-2xl items-center'>
        <div className='mr-4 hidden md:flex'>
          <a className='mr-6 flex items-center space-x-2' href='/'>
            <span className='hidden text-3xl font-bold sm:inline-block'>CSS Layout Playground</span>
          </a>
        </div>
        <div className='flex flex-1 items-center justify-between space-x-2 md:justify-end'>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <ResetLayoutButton />
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <nav className='flex items-center'>
            <a
              href='https://github.com/javalce/css-layout-playground'
              rel='noreferrer'
              target='_blank'
            >
              <div className='inline-flex size-10 items-center justify-center whitespace-nowrap rounded-md px-0 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'>
                <GithubIcon className='size-6' />
                <span className='sr-only'>GitHub</span>
              </div>
            </a>
            <ThemeToggleButton />
          </nav>
        </div>
      </div>
    </header>
  );
}
