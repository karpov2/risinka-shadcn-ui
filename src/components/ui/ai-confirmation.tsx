import type { ComponentProps, ReactElement, ReactNode } from 'react';
import { cn } from 'cn';
import { Item, ItemActions, ItemContent } from '@/components/ui/item';
import { Button } from '@/components/ui/button';

export interface AiConfirmationAction {
  readonly value: string;
  readonly label: string;
  readonly icon: ReactNode;
  readonly variant?: ComponentProps<typeof Button>['variant'];
}

/** Данные и смысл каждого решения принадлежат потребителю; автофокуса и выбора по умолчанию нет. */
export function AiConfirmation({ actions, pending = false, onAction, children, className, ...props }: Omit<ComponentProps<typeof Item>, 'children'> & {
  readonly actions: readonly AiConfirmationAction[];
  readonly pending?: boolean;
  readonly children: ReactNode;
  onAction(value: string): void;
}): ReactElement {
  return <Item role="region" className={cn('block rounded-xl border-0 p-4 text-sm', className)} {...props}>
    <ItemContent className="min-w-0 gap-0">{children}</ItemContent>
    <ItemActions className="mt-[16px] flex-wrap gap-[8px]">{actions.map((action) => <Button key={action.value} type="button" variant={action.variant ?? 'secondary'} disabled={pending} onClick={() => onAction(action.value)} className="h-auto min-h-[32px] whitespace-normal px-[12px] py-[8px] [overflow-wrap:anywhere]">{action.icon}{action.label}</Button>)}</ItemActions>
  </Item>;
}
