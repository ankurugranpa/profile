import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M14.1 8.4V6.7c0-.8.5-1 1-1h2.6V2.1L14.3 2C10.9 2 9.6 4.1 9.6 6.4v2H7v4h2.6V22h4.5v-9.6h3.2l.5-4h-3.7Z" />
    </svg>
  )
}

export function XIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M18.9 2h3.7l-8.1 9.2L24 22h-7.4l-5.8-7.6L4.2 22H.5l8.6-9.8L0 2h7.6l5.2 6.9L18.9 2Zm-1.3 18.1h2L6.5 3.8H4.4l13.2 16.3Z" />
    </svg>
  )
}
