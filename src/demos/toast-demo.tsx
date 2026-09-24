"use client"

/** Пример shadcn/ui (MIT): apps/v4/examples/base/toast-demo.tsx, тег shadcn@4.21.0; импорты — на компоненты этой библиотеки. */
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/toast"

export function ToastDemo() {
  function showToast() {
    const id = toast.add({
      title: "Event created",
      description: "Sunday, December 3 at 9:00 AM",
      actionProps: {
        children: "Undo",
        onClick() {
          toast.close(id)
        },
      },
    })
  }

  return (
    <Button variant="outline" onClick={showToast}>
      Show Toast
    </Button>
  )
}
