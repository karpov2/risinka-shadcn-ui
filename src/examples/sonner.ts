import { toast as manager } from "@/components/ui/toast"

/** `toast(текст)` из sonner в примерах сайта shadcn/ui — уведомлением библиотеки (Toast на Base UI). */
export function toast(message: string) {
  manager.add({ title: message })
}
