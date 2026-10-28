/** Канонические состояния общей композиции AiSuggestions, без native транспорта. */
import { useState, type ReactElement } from "react"
import { LightbulbIcon, SearchIcon } from "lucide-react"
import { AiSuggestions } from "@/components/ui/ai-suggestions"

function Sample({ state }: { readonly state: "empty" | "working" | "error" | "data" }): ReactElement {
  const [text, setText] = useState("")
  const items = state === "empty" ? [] : [{ id: "inspect", label: "Разобраться в проекте", text: "Объясни устройство проекта", icon: <SearchIcon /> }, { id: "plan", label: "Составить план", text: "Помоги составить план задачи", icon: <LightbulbIcon /> }]
  return <div className="space-y-3 text-sm">
    {state === "empty" && <p className="text-muted-foreground">Подсказок пока нет.</p>}
    {state === "error" && <p role="alert" className="text-destructive">Подсказки недоступны.</p>}
    <AiSuggestions items={items} label="Примеры просьб" disabled={state !== "data"} onSelect={setText} />
    <output className="block text-muted-foreground">{text === "" ? "Выбор подставит текст; отправки здесь нет." : text}</output>
  </div>
}
export function AiSuggestionsEmpty(): ReactElement { return <Sample state="empty" /> }
export function AiSuggestionsWorking(): ReactElement { return <Sample state="working" /> }
export function AiSuggestionsError(): ReactElement { return <Sample state="error" /> }
export function AiSuggestionsData(): ReactElement { return <Sample state="data" /> }
export default function AiSuggestionsExample(): ReactElement { return <div className="flex flex-col gap-6"><AiSuggestionsEmpty /><AiSuggestionsWorking /><AiSuggestionsError /><AiSuggestionsData /></div> }
