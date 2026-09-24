import type { ComponentProps } from "react"

/** `next/link` для примеров: обычная ссылка. */
export default function Link({ href, ...props }: Omit<ComponentProps<"a">, "href"> & { href: string | { pathname?: string } }) {
  return <a href={typeof href === "string" ? href : (href.pathname ?? "#")} {...props} />
}
