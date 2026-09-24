/** Пример shadcn/ui (MIT): apps/v4/examples/base/slider-demo.tsx, тег shadcn@4.21.0; импорты — на компоненты этой библиотеки. */
import { Slider } from "@/components/ui/slider"

export function SliderDemo() {
  return (
    <Slider
      defaultValue={[75]}
      max={100}
      step={1}
      className="mx-auto w-full max-w-xs"
    />
  )
}
