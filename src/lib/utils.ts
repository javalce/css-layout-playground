import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalizeFirstLetter(str: string) {
  if (str === '') return str;

  if (/[A-Z]/.exec(str[0])) return str;

  const capitalized = str.replace(/^./, str[0].toUpperCase());

  return capitalized;
}
