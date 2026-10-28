import { useEffect, useRef, useState, type ReactElement, type ReactNode } from 'react';
import { Radio as RadioPrimitive } from '@base-ui/react/radio';
import { cn } from 'cn';
import { Button, buttonVariants } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { RadioGroup } from '@/components/ui/radio-group';

export interface AiModelChoice { readonly id: string; readonly label: string }
export interface AiEffortChoice extends AiModelChoice { readonly highlighted?: boolean }

export interface AiModelSelectorProps {
  readonly label: string;
  readonly modelLabel: string;
  readonly defaultModelLabel: string;
  readonly modelValue?: string;
  readonly models: readonly AiModelChoice[];
  readonly effortValue?: string;
  readonly effortLabel?: string;
  readonly efforts: readonly AiEffortChoice[];
  readonly emptyEffortLabel: string;
  readonly preview: number;
  readonly disabled: boolean;
  readonly canReset: boolean;
  readonly icons: { readonly back: ReactNode; readonly bolt: ReactNode; readonly check: ReactNode; readonly chevron: ReactNode; readonly reset: ReactNode };
  /** Контрол приложения: стандартный Slider или шкала с собственными отметками. */
  readonly effortControl: ReactNode;
  onOpenChange?(open: boolean): void;
  onModelChange(value: string | null): Promise<boolean>;
  onResetEffort(): void;
}

/** Только представление фактических вариантов. Каталог, сохранение и обработка отказа — у потребителя. */
export function AiModelSelector(props: AiModelSelectorProps): ReactElement {
  const { modelLabel, defaultModelLabel, modelValue, models, effortValue, effortLabel, efforts, emptyEffortLabel, preview, disabled, canReset, icons } = props;
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<'effort' | 'models'>('effort');
  const modelButton = useRef<HTMLButtonElement>(null);
  const modelList = useRef<HTMLDivElement>(null);
  const returnFocus = useRef(false);
  const selected = efforts[preview];
  useEffect(() => {
    if (view === 'models') {
      // CompositeItem получает индекс после регистрации. Фокус раньше этого сбрасывает tab stop в -1.
      const frame = requestAnimationFrame(() => modelList.current?.querySelector<HTMLElement>('[role="radio"][aria-checked="true"]')?.focus());
      return () => cancelAnimationFrame(frame);
    }
    if (returnFocus.current) { returnFocus.current = false; modelButton.current?.focus(); }
  }, [view]);
  const back = (): void => { returnFocus.current = true; setView('effort'); };
  const chooseModel = async (value: unknown): Promise<void> => {
    if (disabled || (value !== null && typeof value !== 'string')) return;
    if (await props.onModelChange(value)) back();
  };
  const highlighted = efforts.find((choice) => choice.id === effortValue)?.highlighted === true;
  return <Popover open={open} onOpenChange={(value) => { setOpen(value); props.onOpenChange?.(value); if (!value) setView('effort'); }}>
    <PopoverTrigger render={<Button variant="ghost" className="h-[32px] w-[192px] min-w-0 shrink justify-end gap-[6px] rounded-full px-[9px] text-sm text-muted-foreground transition-colors hover:bg-muted aria-expanded:bg-muted" disabled={disabled} aria-label={props.label} title={modelValue === undefined ? defaultModelLabel : modelLabel} />}>
      <span className="truncate">{modelLabel}</span>{effortLabel !== undefined && <span className={highlighted ? 'shrink-0 text-violet-700' : 'shrink-0 text-secondary-foreground'}>{effortLabel}</span>}<span className="flex shrink-0 rotate-90">{icons.chevron}</span>
    </PopoverTrigger>
    <PopoverContent side="top" align="end" sideOffset={9} className={view === 'models' ? 'w-[252px] gap-0 rounded-[18px] p-[12px] transition-[opacity,transform]' : 'w-[252px] gap-0 rounded-[18px] p-[9px] transition-[opacity,transform]'}>
      {view === 'models' ? <>
        <div className="mb-[6px] flex items-center gap-[6px] text-muted-foreground"><Button variant="ghost" className="size-[32px] rounded-lg p-0" aria-label="К рассуждению" title="К рассуждению" onClick={back}>{icons.back}</Button><span>Выбрать модель</span></div>
        <RadioGroup ref={modelList} value={modelValue ?? null} disabled={disabled} onValueChange={(value) => void chooseModel(value)} aria-label="Модель агента" className="max-h-[360px] gap-0 overflow-y-auto">
          {[{ id: null, label: defaultModelLabel }, ...models].map((item) => <RadioPrimitive.Root key={item.id === null ? 'inherit' : 'model:' + item.id} value={item.id} nativeButton render={<button type="button" />} className={cn(buttonVariants({ variant: 'ghost' }), 'h-auto min-h-[40px] w-full justify-start gap-[8px] rounded-lg px-[12px] py-[8px] text-left font-normal')}><span className="min-w-0 flex-1 whitespace-normal [overflow-wrap:anywhere]">{item.label}</span><RadioPrimitive.Indicator>{icons.check}</RadioPrimitive.Indicator></RadioPrimitive.Root>)}
        </RadioGroup>
      </> : <>
        <div className="flex items-start gap-[3px]">
          <span className="flex size-[30px] shrink-0 items-center justify-center text-muted-foreground">{icons.bolt}</span>
          <div className="min-w-0 flex-1 text-center"><p aria-live="polite" className={selected?.highlighted === true ? 'font-medium text-violet-700' : 'font-medium text-primary'}>{efforts.length === 0 ? emptyEffortLabel : selected?.label}</p><Button ref={modelButton} variant="ghost" className="h-[30px] max-w-full gap-[3px] rounded-lg px-[3px] text-muted-foreground" aria-label="Выбрать модель" onClick={() => setView('models')}><span className="truncate">{modelLabel}</span>{icons.chevron}</Button></div>
          <Button variant="ghost" className="size-[30px] shrink-0 rounded-lg p-0 text-muted-foreground" aria-label="Рассуждение по умолчанию" title="Вернуть рассуждение по умолчанию" disabled={disabled || !canReset} onClick={props.onResetEffort}>{icons.reset}</Button>
        </div>
        {efforts.length > 1 && props.effortControl}
      </>}
    </PopoverContent>
  </Popover>;
}
