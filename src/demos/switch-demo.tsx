/** Пример shadcn/ui (MIT): apps/v4/examples/base/switch-demo.tsx, тег shadcn@4.21.0; импорты — на компоненты этой библиотеки. */
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export function SwitchDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  )
}
