"use client"

/** Пример shadcn/ui (MIT): apps/v4/examples/base/progress-demo.tsx, тег shadcn@4.21.0; импорты — на компоненты этой библиотеки. */
import * as React from "react"

import { Progress } from "@/components/ui/progress"

export default function ProgressDemo() {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return <Progress value={progress} className="w-[60%]" />
}
