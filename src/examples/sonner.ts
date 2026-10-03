import { toast as manager } from "@/components/ui/toast"

/** `toast(текст)` из sonner в примерах сайта shadcn/ui — уведомлением библиотеки (Toast на Base UI). */
export function toast(message: string, options: Pick<Parameters<typeof manager.add>[0], "description"> = {}) {
  return manager.add({ title: message, ...options })
}
