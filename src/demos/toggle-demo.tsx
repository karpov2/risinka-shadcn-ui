/** Пример shadcn/ui (MIT): apps/v4/examples/base/toggle-demo.tsx, тег shadcn@4.21.0; импорты — на компоненты этой библиотеки. */
import { BookmarkIcon } from "lucide-react"

import { Toggle } from "@/components/ui/toggle"

export function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle bookmark" size="sm" variant="outline">
      <BookmarkIcon className="group-aria-pressed/toggle:fill-foreground" />
      Bookmark
    </Toggle>
  )
}
