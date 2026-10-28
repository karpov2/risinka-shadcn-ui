import type { ReactElement, ReactNode } from 'react';
import { cn } from 'cn';
import { Button } from '@/components/ui/button';

export interface AiSuggestion {
  readonly id: string;
  readonly label: string;
  readonly text: string;
  readonly icon?: ReactNode;
}

/** Выбор вызывает только callback; решение о черновике/отправке остаётся приложению. */
export function AiSuggestions({ items, label, disabled = false, onSelect, className }: {
  readonly items: readonly AiSuggestion[];
  readonly label: string;
  readonly disabled?: boolean;
  readonly className?: string;
  onSelect(text: string): void;
}): ReactElement | null {
  if (items.length === 0) return null;
  return <div role="group" aria-label={label} className={cn('flex min-w-0 flex-wrap gap-2', className)}>
    {items.map((item) => <Button key={item.id} type="button" variant="outline" size="sm" title={item.label} disabled={disabled} className="h-auto min-h-[32px] min-w-0 max-w-full justify-start text-left text-sm" onClick={() => onSelect(item.text)}>{item.icon}<span className="min-w-0 truncate">{item.label}</span></Button>)}
  </div>;
}
