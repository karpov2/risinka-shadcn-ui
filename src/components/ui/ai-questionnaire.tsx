import { useId, useRef, useState, type ReactElement, type ReactNode } from 'react';
import { cn } from 'cn';
import { Questionnaire as QuestionnairePrimitive } from '@shadcn/react/questionnaire';
import { Questionnaire, QuestionnaireItem, QuestionnaireTitle, QuestionnaireChoices, QuestionnaireChoiceDescription, QuestionnaireInput, QuestionnaireError, QuestionnairePrevious, QuestionnaireNext, QuestionnaireSubmit } from '@/components/ui/questionnaire';
import { Textarea } from '@/components/ui/textarea';

export interface AiQuestion {
  readonly name: string;
  readonly title: string;
  readonly choices: readonly { readonly value: string; readonly label: string; readonly description?: string }[];
  readonly allowText: boolean;
  readonly secret?: boolean;
}
export interface AiQuestionnaireLabels {
  readonly label: string;
  readonly freeText: string;
  readonly otherText: string;
  readonly placeholder: string;
  readonly required: string;
  readonly previous: string;
  readonly next: string;
  readonly submit: string;
  readonly pending: string;
  readonly previousIcon: ReactNode;
  readonly nextIcon: ReactNode;
  readonly submitIcon: ReactNode;
  progress(current: number, total: number): ReactNode;
}

/** DOM-имя отдельно от opaque id: поле requestSubmit не перекрывает метод формы. */
function questionFieldName(name: string): string { return 'answer:' + name; }

/** Native FormData сохраняет все шаги. Транспорт, адресат и представление ошибки — у потребителя. */
export function AiQuestionnaire({ questions, labels, className, note, disabled = false, onAnswer, renderError }: {
  readonly questions: readonly AiQuestion[];
  readonly labels: AiQuestionnaireLabels;
  readonly className?: string;
  readonly note?: ReactNode;
  readonly disabled?: boolean;
  onAnswer(answers: Readonly<Record<string, readonly string[]>>): Promise<void>;
  renderError(error: unknown): ReactNode;
}): ReactElement | null {
  const id = useId();
  const [item, setItem] = useState(questions[0]?.name ?? '');
  const [pending, setPending] = useState(false);
  const [failure, setFailure] = useState<{ readonly error: unknown }>();
  const submitting = useRef(false);
  const index = questions.findIndex((question) => question.name === item);
  if (questions.length === 0) return null;
  return <Questionnaire aria-label={labels.label} aria-busy={pending || disabled} item={questionFieldName(item)} onItemChange={(name) => { const next = questions.find((question) => questionFieldName(question.name) === name); if (next !== undefined) setItem(next.name); }} items={questions.map((question) => ({ name: questionFieldName(question.name), required: true, choices: question.choices.map(({ value }) => ({ value })) }))} className={cn('gap-0 text-sm', className)} onSubmit={(event) => {
    event.preventDefault();
    if (disabled || submitting.current) return;
    const data = new FormData(event.currentTarget);
    const answers = Object.fromEntries(questions.map((question) => [question.name, data.getAll(questionFieldName(question.name)).filter((value): value is string => typeof value === 'string')]));
    submitting.current = true;
    setPending(true);
    setFailure(undefined);
    void Promise.resolve().then(() => onAnswer(answers)).catch((error: unknown) => setFailure({ error })).finally(() => { submitting.current = false; setPending(false); });
  }}>
    {questions.length > 1 && <p role="status" className="mb-[12px] text-muted-foreground">{labels.progress(index + 1, questions.length)}</p>}
    <fieldset disabled={pending || disabled} className="min-w-0 border-0 p-0">
      {questions.map((question, questionIndex) => {
        const inputId = id + '-' + questionIndex;
        return <QuestionnaireItem key={question.name} name={questionFieldName(question.name)} required className="gap-0">
          <QuestionnaireTitle className="mb-[12px] text-[16px] leading-normal [&:not(:has(~[data-slot=questionnaire-description]))]:mb-[12px]">{question.title}</QuestionnaireTitle>
          {question.choices.length > 0 && <QuestionnaireChoices className="gap-2">{question.choices.map((choice, choiceIndex) => <QuestionnairePrimitive.Choice key={choiceIndex} value={choice.value} className="flex min-h-[40px] cursor-default items-start gap-[8px] rounded-lg px-[12px] py-[8px] hover:bg-muted/50">
            <QuestionnairePrimitive.ChoiceInput aria-labelledby={inputId + '-choice-' + choiceIndex} aria-describedby={choice.description ? inputId + '-description-' + choiceIndex : undefined} className="mt-0.5 size-[16px] shrink-0 accent-primary" />
            <span className="min-w-0"><span id={inputId + '-choice-' + choiceIndex} className="block">{choice.label}</span>{choice.description !== undefined && choice.description !== '' && <QuestionnaireChoiceDescription id={inputId + '-description-' + choiceIndex} className="block">{choice.description}</QuestionnaireChoiceDescription>}</span>
          </QuestionnairePrimitive.Choice>)}</QuestionnaireChoices>}
          {question.allowText && <label htmlFor={inputId} className="mt-[16px] block text-muted-foreground">{question.choices.length === 0 ? labels.freeText : labels.otherText}
            <QuestionnaireInput id={inputId} type={question.secret ? 'password' : 'text'} autoComplete="off" placeholder={labels.placeholder} aria-keyshortcuts={question.secret ? undefined : 'Meta+Enter Control+Enter'} onKeyDown={(event) => { if (!question.secret && event.key === 'Enter' && !event.metaKey && !event.ctrlKey) event.stopPropagation(); }} className={cn('mt-[8px] px-[12px] text-sm', question.secret ? 'h-[32px] min-h-[32px]' : 'h-auto min-h-[80px] sm:min-h-[80px] resize-y p-[12px]')} render={question.secret ? undefined : <Textarea />} />
          </label>}
          <QuestionnaireError role="alert">{labels.required}</QuestionnaireError>
        </QuestionnaireItem>;
      })}
      {note}
      {failure !== undefined && renderError(failure.error)}
      <div className="mt-[16px] flex items-center justify-between gap-[12px]">
        {questions.length > 1 && <QuestionnairePrevious variant="ghost" className="h-auto min-h-[32px] px-[12px] py-[8px] sm:min-h-[32px]">{labels.previousIcon}{labels.previous}</QuestionnairePrevious>}
        <QuestionnaireNext className="ml-auto h-auto min-h-[32px] px-[12px] py-[8px] sm:min-h-[32px]">{labels.nextIcon}{labels.next}</QuestionnaireNext>
        <QuestionnaireSubmit className="ml-auto h-auto min-h-[32px] px-[12px] py-[8px] sm:min-h-[32px]">{labels.submitIcon}{pending || disabled ? labels.pending : labels.submit}</QuestionnaireSubmit>
      </div>
    </fieldset>
  </Questionnaire>;
}
