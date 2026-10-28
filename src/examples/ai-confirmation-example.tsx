import { useState, type ReactElement } from 'react';
import { BanIcon, CheckIcon } from 'lucide-react';
import { AiConfirmation } from '@/components/ui/ai-confirmation';
function Sample({ state }: { readonly state: 'working' | 'error' | 'data' }): ReactElement {
  const [decision, setDecision] = useState('');
  return <AiConfirmation aria-label="Разрешение" pending={state === 'working'} actions={[{ value: 'approve:once', label: 'Разрешить один раз', icon: <CheckIcon />, variant: 'default' }, { value: 'deny:turn', label: 'Запретить', icon: <BanIcon /> }]} onAction={setDecision} className="bg-muted/50">
    <p>Разрешить проверку выбранного файла?</p>
    {state === 'error' && <p role="alert" className="mt-2 text-destructive">Ответ не отправлен. Повторите.</p>}
    {decision !== '' && <p role="status">Выбрано: {decision}</p>}
  </AiConfirmation>;
}
export function AiConfirmationEmpty(): ReactElement { return <p className="text-sm">Запросов на разрешение нет.</p>; }
export function AiConfirmationWorking(): ReactElement { return <Sample state="working" />; }
export function AiConfirmationError(): ReactElement { return <Sample state="error" />; }
export function AiConfirmationData(): ReactElement { return <Sample state="data" />; }
export default function AiConfirmationExample(): ReactElement { return <div className="space-y-6"><AiConfirmationEmpty /><AiConfirmationWorking /><AiConfirmationError /><AiConfirmationData /></div>; }
