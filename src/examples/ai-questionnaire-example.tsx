import { useState, type ReactElement } from 'react';
import { ArrowLeftIcon, ChevronRightIcon, CheckIcon } from 'lucide-react';
import { AiQuestionnaire } from '@/components/ui/ai-questionnaire';
function Sample({ state }: { readonly state: 'working' | 'error' | 'data' }): ReactElement {
  const [sent, setSent] = useState(false);
  return <div className="text-sm">
    {state === 'error' && <p role="alert" className="mb-3 text-destructive">Ответ не отправлен. Черновик остаётся в форме.</p>}
    {sent && <p role="status">Ответы переданы callback.</p>}
    <AiQuestionnaire disabled={state === 'working'} questions={[{ name: 'direction', title: 'С чего начать?', choices: [{ value: 'library', label: 'Общая библиотека', description: 'Переиспользуемые компоненты.' }, { value: 'application', label: 'Приложение' }], allowText: true }, { name: 'secret', title: 'Введите тестовое секретное слово', choices: [], allowText: true, secret: true }]} labels={{ label: 'Вопросы', freeText: 'Ваш ответ', otherText: 'Или ответьте своими словами', placeholder: 'Напишите ответ здесь…', required: 'Выберите вариант или напишите ответ.', previous: 'Назад', next: 'Далее', submit: 'Ответить', pending: 'Отправляю…', previousIcon: <ArrowLeftIcon />, nextIcon: <ChevronRightIcon />, submitIcon: <CheckIcon />, progress: (current, total) => 'Вопрос ' + current + ' из ' + total }} onAnswer={async () => { setSent(true); }} renderError={() => <p role="alert" className="text-destructive">Ответ не отправлен. Повторите.</p>} />
  </div>;
}
export function AiQuestionnaireEmpty(): ReactElement { return <p className="text-sm">Вопросов нет.</p>; }
export function AiQuestionnaireWorking(): ReactElement { return <Sample state="working" />; }
export function AiQuestionnaireError(): ReactElement { return <Sample state="error" />; }
export function AiQuestionnaireData(): ReactElement { return <Sample state="data" />; }
export default function AiQuestionnaireExample(): ReactElement { return <div className="space-y-6"><AiQuestionnaireEmpty /><AiQuestionnaireWorking /><AiQuestionnaireError /><AiQuestionnaireData /></div>; }
