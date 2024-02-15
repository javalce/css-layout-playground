'use client';

import { Input } from '../ui/input';
import { Label } from '../ui/label';

export function OptionsInput({
  value,
  min,
  title,
  property,
  onChange,
}: {
  value: number;
  min: number;
  property: string;
  title: string;
  onChange: (property: string, value: number) => void;
}) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(property, Number(e.currentTarget.value));
  };

  return (
    <article>
      <Label>{title}</Label>
      <Input min={min} type='number' value={value} onChange={handleChange} />
    </article>
  );
}
