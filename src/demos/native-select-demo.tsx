/** Пример shadcn/ui (MIT): apps/v4/examples/base/native-select-demo.tsx, тег shadcn@4.21.0; импорты — на компоненты этой библиотеки. */
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select"

export default function NativeSelectDemo() {
  return (
    <NativeSelect>
      <NativeSelectOption value="">Select status</NativeSelectOption>
      <NativeSelectOption value="todo">Todo</NativeSelectOption>
      <NativeSelectOption value="in-progress">In Progress</NativeSelectOption>
      <NativeSelectOption value="done">Done</NativeSelectOption>
      <NativeSelectOption value="cancelled">Cancelled</NativeSelectOption>
    </NativeSelect>
  )
}
