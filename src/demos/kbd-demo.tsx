/** Пример shadcn/ui (MIT): apps/v4/examples/base/kbd-demo.tsx, тег shadcn@4.21.0; импорты — на компоненты этой библиотеки. */
import { Kbd, KbdGroup } from "@/components/ui/kbd"

export default function KbdDemo() {
  return (
    <div className="flex flex-col items-center gap-4">
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>⇧</Kbd>
        <Kbd>⌥</Kbd>
        <Kbd>⌃</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <span>+</span>
        <Kbd>B</Kbd>
      </KbdGroup>
    </div>
  )
}
