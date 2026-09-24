/** Пример shadcn/ui (MIT): apps/v4/examples/base/aspect-ratio-demo.tsx, тег shadcn@4.21.0; импорты — на компоненты этой библиотеки. */
import Image from "@/examples/next-image"

import { AspectRatio } from "@/components/ui/aspect-ratio"

export default function AspectRatioDemo() {
  return (
    <AspectRatio ratio={16 / 9} className="w-full max-w-sm rounded-lg bg-muted">
      <Image
        src="https://avatar.vercel.sh/shadcn1"
        alt="Photo"
        fill
        className="rounded-lg object-cover grayscale dark:brightness-20"
      />
    </AspectRatio>
  )
}
