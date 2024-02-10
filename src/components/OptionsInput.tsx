'use client';

import type { FlexboxItem, FlexboxItemProperty } from '@/models/layout';
import { Input } from './ui/input';
import { Label } from './ui/label';

export function OptionsInput({
  value,
  min,
  title,
  property,
  onChange,
}: {
  value: number;
  min: number;
  property: FlexboxItemProperty;
  title: string;
  onChange: (property: FlexboxItemProperty, value: Partial<FlexboxItem>) => void;
}) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(property, { [property]: Number(e.currentTarget.value) });
  };

  return (
    <article>
      <Label>{title}</Label>
      <Input min={min} type='number' value={value} onChange={handleChange} />
    </article>
  );
}
