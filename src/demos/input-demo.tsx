/** Пример shadcn/ui (MIT): apps/v4/examples/base/input-demo.tsx, тег shadcn@4.21.0; импорты — на компоненты этой библиотеки. */
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function InputDemo() {
  return (
    <Field>
      <FieldLabel htmlFor="input-demo-api-key">API Key</FieldLabel>
      <Input id="input-demo-api-key" type="password" placeholder="sk-..." />
      <FieldDescription>
        Your API key is encrypted and stored securely.
      </FieldDescription>
    </Field>
  )
}
