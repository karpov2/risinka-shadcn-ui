import { Children, type ReactElement, type ReactNode } from "react"
import {
  Trace, TraceLine, TraceIcon, TraceTitle, TraceDescription,
  TraceCollapsible, TraceCollapsibleTrigger, TraceCollapsibleContent,
} from "@/components/ui/trace"

type Disclosure =
  | { readonly open?: undefined; readonly onOpenChange?: (open: boolean) => void }
  | { readonly open: boolean; readonly onOpenChange: (open: boolean) => void }

export type AiTraceProps = Disclosure & {
  readonly title: ReactNode
  readonly description?: ReactNode
  readonly icon?: ReactNode
  readonly status?: "pending" | "running" | "error"
  readonly children?: ReactNode
  readonly defaultOpen?: boolean
}

/** Фактический шаг работы. Текст, значок, статус и содержимое принадлежат потребителю. */
export function AiTrace(props: AiTraceProps): ReactElement {
  const { title, description, icon, status, children, defaultOpen } = props
  const line = (
    <TraceLine status={status}>
      {icon == null ? null : <TraceIcon>{icon}</TraceIcon>}
      <TraceTitle>{title}</TraceTitle>
      {description == null ? null : <TraceDescription>{description}</TraceDescription>}
    </TraceLine>
  )
  const content = Children.toArray(children).filter((child) => typeof child !== "string" || child.trim() !== "")
  if (content.length === 0) return <Trace aria-busy={status === "running"}>{line}</Trace>
  const disclosure = props.open === undefined
    ? { onOpenChange: props.onOpenChange }
    : { open: props.open, onOpenChange: props.onOpenChange }
  return (
    <Trace aria-busy={status === "running"}>
      <TraceCollapsible {...disclosure} defaultOpen={defaultOpen}>
        <TraceCollapsibleTrigger>{line}</TraceCollapsibleTrigger>
        <TraceCollapsibleContent>{content}</TraceCollapsibleContent>
      </TraceCollapsible>
    </Trace>
  )
}
