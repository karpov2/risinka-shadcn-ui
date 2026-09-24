import * as icons from "lucide-react"
import type { ComponentProps, ComponentType } from "react"

/** Значок примера по имени lucide; имена других наборов (tabler, hugeicons…) примеры пишут для сайта shadcn — не нужны. */
export function IconPlaceholder({
  lucide,
  tabler: _tabler,
  hugeicons: _hugeicons,
  phosphor: _phosphor,
  remixicon: _remixicon,
  ...props
}: { lucide: string; tabler?: string; hugeicons?: string; phosphor?: string; remixicon?: string } & ComponentProps<"svg">) {
  const Icon = (icons as unknown as Record<string, ComponentType<ComponentProps<"svg">>>)[lucide] ?? icons.SquareIcon
  return <Icon {...props} />
}
