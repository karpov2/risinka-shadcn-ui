/** Пример shadcn/ui (MIT): apps/v4/registry/bases/base/examples/textarea-example.tsx, тег shadcn@4.21.0; импорты — на компоненты этой библиотеки. */
import {
  Example,
  ExampleWrapper,
} from "@/examples/example"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"

export default function TextareaExample() {
  return (
    <ExampleWrapper>
      <TextareaBasic />
      <TextareaInvalid />
      <TextareaWithLabel />
      <TextareaWithDescription />
      <TextareaDisabled />
    </ExampleWrapper>
  )
}

export function TextareaBasic() {
  return (
    <Example title="Basic">
      <Textarea placeholder="Type your message here." />
    </Example>
  )
}

export function TextareaInvalid() {
  return (
    <Example title="Invalid">
      <Textarea placeholder="Type your message here." aria-invalid="true" />
    </Example>
  )
}

export function TextareaWithLabel() {
  return (
    <Example title="With Label">
      <Field>
        <FieldLabel htmlFor="textarea-demo-message">Message</FieldLabel>
        <Textarea
          id="textarea-demo-message"
          placeholder="Type your message here."
          rows={6}
        />
      </Field>
    </Example>
  )
}

export function TextareaWithDescription() {
  return (
    <Example title="With Description">
      <Field>
        <FieldLabel htmlFor="textarea-demo-message-2">Message</FieldLabel>
        <Textarea
          id="textarea-demo-message-2"
          placeholder="Type your message here."
          rows={6}
        />
        <FieldDescription>
          Type your message and press enter to send.
        </FieldDescription>
      </Field>
    </Example>
  )
}

export function TextareaDisabled() {
  return (
    <Example title="Disabled">
      <Field>
        <FieldLabel htmlFor="textarea-demo-disabled">Message</FieldLabel>
        <Textarea
          id="textarea-demo-disabled"
          placeholder="Type your message here."
          disabled
        />
      </Field>
    </Example>
  )
}
