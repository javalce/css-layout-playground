import type { PropsWithChildren } from 'react';

export function createWrapper<T>(
  Wrapper: (props: PropsWithChildren<T> | { children: React.ReactNode }) => JSX.Element,
  props?: T,
) {
  return function CreatedWrapper({ children }: { children: React.ReactNode }) {
    return <Wrapper {...props}>{children}</Wrapper>;
  };
}
