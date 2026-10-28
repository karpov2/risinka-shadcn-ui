import type { ComponentProps, ReactElement, ReactNode } from 'react';
import { cn } from 'cn';
import { Message, MessageContent, MessageFooter } from '@/components/ui/message';
import { Bubble, BubbleContent } from '@/components/ui/bubble';
import { Attachment, AttachmentContent, AttachmentDescription, AttachmentMedia, AttachmentTitle } from '@/components/ui/attachment';
import { Marker, MarkerContent } from '@/components/ui/marker';

/** Представление реплики: текст, действия и данные остаются у потребителя. */
export function AiMessage({ align = 'start', variant = 'ghost', className, bubbleClassName, children, footer, ...props }: ComponentProps<typeof Message> & {
  readonly variant?: ComponentProps<typeof Bubble>['variant'];
  readonly bubbleClassName?: string;
  readonly footer?: ReactNode;
}): ReactElement {
  return <Message align={align} className={cn('text-base leading-[1.55]', className)} {...props}>
    <MessageContent className="gap-0">
      <Bubble align={align} variant={variant} className={cn(align === 'end' ? 'max-w-[90%]' : 'w-full max-w-full', bubbleClassName)}>{children}</Bubble>
      {footer != null && <MessageFooter className="px-0 font-normal">{footer}</MessageFooter>}
    </MessageContent>
  </Message>;
}

export function AiMessageBody({ className, ...props }: ComponentProps<typeof BubbleContent>): ReactElement {
  return <BubbleContent className={cn('border-0 text-base leading-[1.55] [overflow-wrap:anywhere]', className)} {...props} />;
}

/** Карточка метаданных: без обращения к пути, загрузки и обещания доступности. */
export function AiMessageAttachment({ name, description, icon, className }: {
  readonly name: string;
  readonly description?: ReactNode;
  readonly icon?: ReactNode;
  readonly className?: string;
}): ReactElement {
  return <Attachment size="sm" title={name} className={cn('min-w-0 max-w-full flex-nowrap text-sm', className)}>
    {icon != null && <AttachmentMedia>{icon}</AttachmentMedia>}
    <AttachmentContent><AttachmentTitle>{name}</AttachmentTitle>{description != null && <AttachmentDescription className="text-sm">{description}</AttachmentDescription>}</AttachmentContent>
  </Attachment>;
}

export function AiMessageMarker({ className, children, ...props }: ComponentProps<typeof Marker>): ReactElement {
  return <Marker className={className} {...props}><MarkerContent className="[overflow-wrap:anywhere]">{children}</MarkerContent></Marker>;
}
