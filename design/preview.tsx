import "../src/index.css"
import type { ReactNode } from "react"
import { Toaster } from "../src/components/ui/toast"

/** Обёртка листов библиотеки: тема и шрифт shadcn/ui из src/index.css; уведомления примеров — через Toaster библиотеки. */
export default function Preview({ children }: { readonly children: ReactNode }) {
  return <Toaster>{children}</Toaster>
}
