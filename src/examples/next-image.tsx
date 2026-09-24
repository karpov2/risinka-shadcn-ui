import type { ComponentProps } from "react"

/** `next/image` для примеров: обычная картинка; `fill` — на весь родитель. */
export default function Image({ src, fill, priority: _priority, style, ...props }: Omit<ComponentProps<"img">, "src"> & { src: string | { src: string }; fill?: boolean; priority?: boolean }) {
  const url = typeof src === "string" ? src : src.src
  return <img src={url} style={fill === true ? { position: "absolute", inset: 0, width: "100%", height: "100%", ...style } : style} {...props} />
}
