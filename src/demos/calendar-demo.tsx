"use client"

/** Пример shadcn/ui (MIT): apps/v4/examples/base/calendar-demo.tsx, тег shadcn@4.21.0; импорты — на компоненты этой библиотеки. */
import * as React from "react"

import { Calendar } from "@/components/ui/calendar"

export default function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-lg border"
      captionLayout="dropdown"
    />
  )
}
