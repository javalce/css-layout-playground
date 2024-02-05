export function FlexboxContainer({ children }: { children: React.ReactNode }) {
  return <section className='flex flex-col gap-y-5'>{children}</section>;
}
