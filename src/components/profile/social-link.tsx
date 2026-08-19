import type { ComponentType, SVGProps } from 'react'
import { ChevronRight, Mail } from 'lucide-react'

import { FacebookIcon, XIcon } from '@/components/icons/brand-icons'
import { cn } from '@/lib/utils'
import type { SocialLink as SocialLinkType, SocialPlatform } from '@/types/profile'

type SocialLinkProps = {
  link: SocialLinkType
  index: number
}

type PlatformStyle = {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  iconClassName: string
}

const platformStyles = {
  facebook: {
    icon: FacebookIcon,
    iconClassName: 'bg-[#1877f2] text-white',
  },
  x: {
    icon: XIcon,
    iconClassName: 'bg-stone-900 text-white',
  },
  gmail: {
    icon: Mail,
    iconClassName: 'bg-red-100 text-red-700',
  },
} satisfies Record<SocialPlatform, PlatformStyle>

function getExternalLinkProps(href: string) {
  return href.startsWith('http')
    ? ({ target: '_blank', rel: 'noreferrer' } as const)
    : {}
}

export function SocialLink({ link, index }: SocialLinkProps) {
  const { icon: Icon, iconClassName } = platformStyles[link.platform]

  return (
    <a
      href={link.href}
      className="group grid min-h-20 grid-cols-[3.5rem_1fr_2.25rem] items-center rounded-[1.375rem] border border-stone-900/5 bg-white/75 p-3.5 shadow-xs transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-lg active:scale-[0.985] motion-safe:animate-[link-in_.5s_cubic-bezier(.2,.8,.2,1)_both]"
      style={{ animationDelay: `${index * 90 + 180}ms` }}
      {...getExternalLinkProps(link.href)}
    >
      <span
        className={cn(
          'grid size-13 place-items-center rounded-2xl',
          iconClassName,
        )}
      >
        <Icon className="size-6 fill-current" strokeWidth={2} />
      </span>

      <span className="flex min-w-0 flex-col gap-0.5 pl-1">
        <strong className="text-base font-bold tracking-tight">
          {link.label}
        </strong>
        <small className="truncate text-xs text-stone-500">
          {link.description}
        </small>
      </span>

      <span className="grid size-8 place-items-center rounded-full bg-stone-100 text-stone-400 transition group-hover:translate-x-0.5 group-hover:text-stone-900">
        <ChevronRight className="size-4.5" strokeWidth={1.8} />
      </span>
    </a>
  )
}
