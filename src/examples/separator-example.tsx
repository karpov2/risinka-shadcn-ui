/** Пример shadcn/ui (MIT): apps/v4/registry/bases/base/examples/separator-example.tsx, тег shadcn@4.21.0; импорты — на компоненты этой библиотеки. */
import {
  Example,
  ExampleWrapper,
} from "@/examples/example"
import { Separator } from "@/components/ui/separator"

export default function SeparatorExample() {
  return (
    <ExampleWrapper>
      <SeparatorHorizontal />
      <SeparatorVertical />
      <SeparatorVerticalMenu />
      <SeparatorInList />
    </ExampleWrapper>
  )
}

export function SeparatorHorizontal() {
  return (
    <Example title="Horizontal">
      <div className="flex flex-col gap-4 text-sm style-lyra:text-xs/relaxed">
        <div className="flex flex-col gap-1">
          <div className="leading-none font-medium">shadcn/ui</div>
          <div className="text-muted-foreground">
            The Foundation for your Design System
          </div>
        </div>
        <Separator />
        <div>
          A set of beautifully designed components that you can customize,
          extend, and build on.
        </div>
      </div>
    </Example>
  )
}

export function SeparatorVertical() {
  return (
    <Example title="Vertical">
      <div className="flex h-5 items-center gap-4 text-sm style-lyra:text-xs/relaxed">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </Example>
  )
}

export function SeparatorVerticalMenu() {
  return (
    <Example title="Vertical Menu">
      <div className="flex items-center gap-2 text-sm md:gap-4 style-lyra:text-xs/relaxed">
        <div className="flex flex-col gap-1">
          <span className="font-medium">Settings</span>
          <span className="text-xs text-muted-foreground">
            Manage preferences
          </span>
        </div>
        <Separator orientation="vertical" />
        <div className="flex flex-col gap-1">
          <span className="font-medium">Account</span>
          <span className="text-xs text-muted-foreground">
            Profile & security
          </span>
        </div>
        <Separator orientation="vertical" />
        <div className="flex flex-col gap-1">
          <span className="font-medium">Help</span>
          <span className="text-xs text-muted-foreground">Support & docs</span>
        </div>
      </div>
    </Example>
  )
}

export function SeparatorInList() {
  return (
    <Example title="In List">
      <div className="flex flex-col gap-2 text-sm style-lyra:text-xs/relaxed">
        <dl className="flex items-center justify-between">
          <dt>Item 1</dt>
          <dd className="text-muted-foreground">Value 1</dd>
        </dl>
        <Separator />
        <dl className="flex items-center justify-between">
          <dt>Item 2</dt>
          <dd className="text-muted-foreground">Value 2</dd>
        </dl>
        <Separator />
        <dl className="flex items-center justify-between">
          <dt>Item 3</dt>
          <dd className="text-muted-foreground">Value 3</dd>
        </dl>
      </div>
    </Example>
  )
}
