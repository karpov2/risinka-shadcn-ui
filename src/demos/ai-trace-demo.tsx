/** Канонические состояния общей композиции AiTrace, без native транспорта. */
import type { ReactElement } from "react"
import { CheckIcon, CircleDashedIcon, FileSearchIcon, TriangleAlertIcon } from "lucide-react"
import { AiTrace } from "@/components/ui/ai-trace"

export function AiTraceEmpty(): ReactElement {
  return <AiTrace title="Шаги появятся после начала работы" icon={<CircleDashedIcon />} status="pending">{[]}</AiTrace>
}

export function AiTraceWorking(): ReactElement {
  return <AiTrace title="Чтение файлов" description="2 файла" icon={<FileSearchIcon />} status="running" defaultOpen><p>Изучаю исходники и зависимости компонента.</p></AiTrace>
}

export function AiTraceError(): ReactElement {
  return <AiTrace title="Файл не прочитан" icon={<TriangleAlertIcon />} status="error" defaultOpen><p>Доступ запрещён. Проверьте права на файл и повторите чтение.</p></AiTrace>
}

export function AiTraceData(): ReactElement {
  return <AiTrace title="Исходники изучены" description="2 файла" icon={<CheckIcon />} defaultOpen><p>Компонент получает данные и действия от приложения.</p></AiTrace>
}

export default function AiTraceExample(): ReactElement {
  return <div className="flex flex-col gap-6"><AiTraceEmpty /><AiTraceWorking /><AiTraceError /><AiTraceData /></div>
}
