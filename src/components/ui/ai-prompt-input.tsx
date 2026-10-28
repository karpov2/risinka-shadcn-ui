import type { ComponentProps, ReactElement, ReactNode } from 'react';
import { cn } from 'cn';
import { InputGroup, InputGroupAddon, InputGroupTextarea } from '@/components/ui/input-group';
import { Attachment, AttachmentAction, AttachmentActions, AttachmentContent, AttachmentDescription, AttachmentTitle } from '@/components/ui/attachment';

/** Каркас ввода. Черновик, клавиатура, загрузка и отправка принадлежат потребителю. */
export function AiPromptInput({ className, ...props }: ComponentProps<typeof InputGroup>): ReactElement {
  return <InputGroup className={cn('rounded-2xl bg-background', className)} {...props} />;
}

export function AiPromptInputTextarea(props: ComponentProps<typeof InputGroupTextarea>): ReactElement {
  return <InputGroupTextarea {...props} />;
}

export function AiPromptInputFooter({ className, ...props }: Omit<ComponentProps<typeof InputGroupAddon>, 'align'>): ReactElement {
  return <InputGroupAddon align="block-end" className={cn('gap-1', className)} {...props} />;
}

export interface AiPromptAttachmentProps {
  readonly name: string;
  readonly description?: ReactNode;
  readonly className?: string;
  readonly title?: string;
  readonly remove?: { readonly label: string; readonly icon: ReactNode; readonly disabled?: boolean; onClick(): void };
}

/** Сведения о выбранной загрузке; компонент не читает путь и не обещает доступность файла. */
export function AiPromptAttachment({ name, description, className, title, remove }: AiPromptAttachmentProps): ReactElement {
  return <Attachment title={title} size="xs" className={cn('min-w-0 flex-nowrap border-0 bg-muted text-sm has-data-[slot=attachment-content]:py-0.5', className)}>
    <AttachmentContent><AttachmentTitle className="font-normal">{name}</AttachmentTitle>{description != null && <AttachmentDescription className="text-sm">{description}</AttachmentDescription>}</AttachmentContent>
    {remove !== undefined && <AttachmentActions><AttachmentAction type="button" aria-label={remove.label} title={remove.label} disabled={remove.disabled} onClick={remove.onClick}>{remove.icon}</AttachmentAction></AttachmentActions>}
  </Attachment>;
}
