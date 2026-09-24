/** Пример shadcn/ui (MIT): apps/v4/examples/base/badge-demo.tsx, тег shadcn@4.21.0; импорты — на компоненты этой библиотеки. */
import { Badge } from "@/components/ui/badge"

export default function BadgeDemo() {
  return (
    <div className="flex w-full flex-wrap justify-center gap-2">
      <Badge>Badge</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  )
}
