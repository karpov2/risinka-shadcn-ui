import { useState, type ReactElement } from "react"
import { ArrowUpIcon, XIcon } from "lucide-react"
import { AiPromptInput, AiPromptInputTextarea, AiPromptInputFooter, AiPromptAttachment } from "@/components/ui/ai-prompt-input"
import { Button } from "@/components/ui/button"

function Sample({ state }: { readonly state: "empty" | "working" | "error" | "data" }): ReactElement {
  const [text, setText] = useState(state === "data" ? "Проверь выбранный файл" : "")
  const [attached, setAttached] = useState(state === "data")
  const [sent, setSent] = useState(false)
  const disabled = state === "working"
  return <div className="w-full max-w-lg space-y-3 text-sm">
    {state === "error" && <p role="alert" className="text-destructive">Сообщение не отправлено. Черновик сохранён.</p>}
    {attached && <AiPromptAttachment name="example.txt" description="Пример выбранного файла" remove={{ label: "Убрать example.txt", icon: <XIcon />, onClick: () => setAttached(false) }} />}
    <AiPromptInput><AiPromptInputTextarea aria-label="Сообщение" value={text} disabled={disabled} onChange={(event) => setText(event.target.value)} placeholder="Напишите сообщение…" /><AiPromptInputFooter><span className="min-w-0 flex-1 text-muted-foreground">{disabled ? "Идёт работа" : sent ? "Callback вызван" : "Черновик"}</span><Button type="button" size="icon-sm" aria-label="Отправить" disabled={disabled || text.trim() === ""} onClick={() => setSent(true)}><ArrowUpIcon /></Button></AiPromptInputFooter></AiPromptInput>
  </div>
}
export function AiPromptInputEmpty(): ReactElement { return <Sample state="empty" /> }
export function AiPromptInputWorking(): ReactElement { return <Sample state="working" /> }
export function AiPromptInputError(): ReactElement { return <Sample state="error" /> }
export function AiPromptInputData(): ReactElement { return <Sample state="data" /> }
export default function AiPromptInputExample(): ReactElement { return <div className="flex flex-col gap-6"><AiPromptInputEmpty /><AiPromptInputWorking /><AiPromptInputError /><AiPromptInputData /></div> }
