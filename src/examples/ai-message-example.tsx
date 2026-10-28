import { useState, type ReactElement } from "react"
import { CheckIcon, FileIcon } from "lucide-react"
import { AiMessage, AiMessageBody, AiMessageAttachment, AiMessageMarker } from "@/components/ui/ai-message"
import { Button } from "@/components/ui/button"

export function AiMessageEmpty(): ReactElement { return <AiMessageMarker>Сообщения появятся после начала разговора.</AiMessageMarker> }
export function AiMessageWorking(): ReactElement { return <AiMessage aria-busy="true"><AiMessageBody>Изучаю выбранные файлы…</AiMessageBody></AiMessage> }
export function AiMessageError(): ReactElement { return <AiMessageMarker role="alert" className="text-destructive">Сообщение не отправлено. Черновик сохранён.</AiMessageMarker> }
export function AiMessageData(): ReactElement {
  const [read, setRead] = useState(false)
  const text = "Проверка завершена. Файлы прочитаны, результат готов."
  return <div className="flex min-w-0 flex-col gap-4">
    <AiMessage align="end" variant="muted"><AiMessageBody className="rounded-[18px] px-3 py-3 whitespace-pre-wrap">Проверь приложенный документ.<div className="mt-2 flex min-w-0 flex-wrap gap-2"><AiMessageAttachment name="План проекта.txt" description="2 КБ" icon={<FileIcon />} /></div></AiMessageBody></AiMessage>
    <AiMessage footer={<div className="mt-2 flex items-center gap-2"><Button type="button" variant="ghost" size="sm" className="min-h-[32px] text-sm" onClick={() => setRead(true)} disabled={read}><CheckIcon />{read ? "Прочитано" : "Отметить прочитанным"}</Button><time dateTime="2026-10-27T12:00:00Z" className="text-sm">12:00</time></div>}><AiMessageBody>{text}</AiMessageBody></AiMessage>
    <AiMessageMarker>Работа завершена.</AiMessageMarker>
  </div>
}
export default function AiMessageExample(): ReactElement { return <div className="flex flex-col gap-6"><AiMessageEmpty /><AiMessageWorking /><AiMessageError /><AiMessageData /></div> }
