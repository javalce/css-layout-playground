'use client';

import { useItem } from '@/hooks/item.hook';
import type { FlexboxItemProperty } from '@/models/layout';
import { Input } from './ui/input';
import { Label } from './ui/label';

export function OptionsInput({
  defaultValue,
  min,
  property,
  title,
}: {
  defaultValue: number;
  min: number;
  property: FlexboxItemProperty;
  title: string;
}) {
  const { updateFlexboxItem } = useItem();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFlexboxItem({
      index: 0,
      propertyName: property,
      property: { [property]: Number(e.currentTarget.value) },
    });
  };

  return (
    <article>
      <Label>{title}</Label>
      <Input defaultValue={defaultValue} min={min} type='number' onChange={handleChange} />
    </article>
  );
}
