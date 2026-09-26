/** Пример shadcn/ui (MIT): apps/v4/examples/base/tooltip-demo.tsx, тег shadcn@4.21.0; импорты — на компоненты этой библиотеки. Всплывающее — открытым (defaultOpen): на холсте его не навести и не нажать. */
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function TooltipDemo() {
  return (
    <Tooltip defaultOpen>
      <TooltipTrigger render={<Button variant="outline" />}>
        Hover
      </TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  )
}
