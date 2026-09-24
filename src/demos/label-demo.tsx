/** Пример shadcn/ui (MIT): apps/v4/examples/base/label-demo.tsx, тег shadcn@4.21.0; импорты — на компоненты этой библиотеки. */
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function LabelDemo() {
  return (
    <div className="flex gap-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  )
}
