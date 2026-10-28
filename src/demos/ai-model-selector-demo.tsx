/** Канонические состояния общей композиции AiModelSelector, без native транспорта. */
import { useId, useState, type ReactElement } from "react"
import { ArrowLeftIcon, CheckIcon, ChevronRightIcon, RotateCcwIcon, ZapIcon } from "lucide-react"
import { AiModelSelector } from "@/components/ui/ai-model-selector"
import { Slider } from "@/components/ui/slider"

function Sample({ state }: { readonly state: "empty" | "working" | "error" | "data" }): ReactElement {
  const [model, setModel] = useState<string>()
  const [effort, setEffort] = useState<string>()
  const [preview, setPreview] = useState(1)
  const effortLabelId = useId()
  const models = [{ id: "sample-a", label: "Пример модели A" }, { id: "sample-b", label: "Пример модели B" }]
  const efforts = state === "empty" ? [] : [{ id: "low", label: "Низкое" }, { id: "high", label: "Высокое" }, { id: "ultra", label: "Ultra", highlighted: true }]
  return <div className="space-y-3 text-sm">{state === "error" && <p role="alert" className="text-destructive">Каталог не загружен. Повторите запрос в приложении.</p>}
    <AiModelSelector label="Модель и рассуждение" modelLabel={state === "empty" ? "Модели загружаются" : models.find((item) => item.id === model)?.label ?? "Модель по умолчанию"} defaultModelLabel="По умолчанию (пример модели A)" modelValue={model} models={state === "empty" ? [] : models} effortValue={effort ?? "high"} effortLabel={state === "empty" ? undefined : efforts.find((item) => item.id === (effort ?? "high"))?.label} efforts={efforts} emptyEffortLabel="Режимы не получены" preview={preview} effortControl={<><span id={effortLabelId} className="sr-only">Режим рассуждения</span><Slider aria-labelledby={effortLabelId} min={0} max={efforts.length - 1} step={1} value={[preview]} onValueChange={(value) => setPreview(typeof value === "number" ? value : value[0] ?? 0)} onValueCommitted={(value) => { const index = typeof value === "number" ? value : value[0] ?? 0; setEffort(efforts[index]?.id) }} /></>} onOpenChange={() => setPreview(efforts.findIndex((item) => item.id === (effort ?? "high")))} disabled={state !== "data"} canReset={effort !== undefined} icons={{ back: <ArrowLeftIcon />, bolt: <ZapIcon />, check: <CheckIcon />, chevron: <ChevronRightIcon />, reset: <RotateCcwIcon /> }} onModelChange={async (value) => { setModel(value ?? undefined); setEffort(undefined); setPreview(1); return true }} onResetEffort={() => { setEffort(undefined); setPreview(1) }} />
  </div>
}
export function AiModelSelectorEmpty(): ReactElement { return <Sample state="empty" /> }
export function AiModelSelectorWorking(): ReactElement { return <Sample state="working" /> }
export function AiModelSelectorError(): ReactElement { return <Sample state="error" /> }
export function AiModelSelectorData(): ReactElement { return <Sample state="data" /> }
export default function AiModelSelectorExample(): ReactElement { return <div className="flex flex-col gap-6"><AiModelSelectorEmpty /><AiModelSelectorWorking /><AiModelSelectorError /><AiModelSelectorData /></div> }
