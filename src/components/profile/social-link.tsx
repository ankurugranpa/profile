import {
  useEffect,
  useRef,
  useState,
  type ComponentType,
  type MouseEvent as ReactMouseEvent,
  type SVGProps,
} from 'react'
import { Check, ChevronRight, Copy, Mail } from 'lucide-react'

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

const itemClassName =
  'group relative grid min-h-20 w-full grid-cols-[3.5rem_1fr_2.25rem] items-center rounded-[1.375rem] border border-stone-900/5 bg-white/75 p-3.5 text-left shadow-xs transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-lg active:scale-[0.985] motion-safe:animate-[link-in_.5s_cubic-bezier(.2,.8,.2,1)_both]'

type PopupPosition = {
  x: number
  y: number
}

async function copyToClipboard(value: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value)
    return
  }

  const textArea = document.createElement('textarea')
  textArea.value = value
  textArea.style.position = 'fixed'
  textArea.style.opacity = '0'
  document.body.appendChild(textArea)
  textArea.select()

  const succeeded = document.execCommand('copy')
  textArea.remove()

  if (!succeeded) throw new Error('クリップボードへのコピーに失敗しました')
}

export function SocialLink({ link, index }: SocialLinkProps) {
  const [popupPosition, setPopupPosition] = useState<PopupPosition | null>(null)
  const popupTimer = useRef<number | undefined>(undefined)
  const { icon: Icon, iconClassName } = platformStyles[link.platform]
  const { action } = link
  const isCopied = popupPosition !== null
  const animationStyle = { animationDelay: `${index * 90 + 180}ms` }

  useEffect(() => {
    return () => window.clearTimeout(popupTimer.current)
  }, [])

  const content = (
    <>
      <span
        className={cn(
          'grid size-13 place-items-center rounded-2xl',
          iconClassName,
        )}
      >
        <Icon
          className={cn('size-6', link.platform === 'gmail' ? 'fill-none' : 'fill-current')}
          strokeWidth={2}
        />
      </span>

      <span className="flex min-w-0 flex-col gap-0.5 pl-1">
        <strong className="text-base font-bold tracking-tight">
          {link.label}
        </strong>
        <small className="truncate text-xs text-stone-500">
          {link.description}
        </small>
      </span>

      <span
        className={cn(
          'grid size-8 place-items-center rounded-full bg-stone-100 text-stone-400 transition group-hover:translate-x-0.5 group-hover:text-stone-900',
          isCopied && 'bg-emerald-100 text-emerald-700',
        )}
      >
        {action.type === 'copy' ? (
          isCopied ? <Check className="size-4.5" /> : <Copy className="size-4" />
        ) : (
          <ChevronRight className="size-4.5" strokeWidth={1.8} />
        )}
      </span>
    </>
  )

  if (action.type === 'copy') {
    const handleCopy = async (event: ReactMouseEvent<HTMLButtonElement>) => {
      const bounds = event.currentTarget.getBoundingClientRect()
      const isKeyboardClick = event.detail === 0
      const nextPopupPosition = {
        x: isKeyboardClick ? bounds.width / 2 : event.clientX - bounds.left,
        y: isKeyboardClick ? bounds.height / 2 : event.clientY - bounds.top,
      }

      await copyToClipboard(action.value)
      setPopupPosition(nextPopupPosition)

      window.clearTimeout(popupTimer.current)
      popupTimer.current = window.setTimeout(() => setPopupPosition(null), 1800)
    }

    return (
      <button
        type="button"
        className={itemClassName}
        style={animationStyle}
        onClick={handleCopy}
        aria-label={`${action.value}をコピー`}
      >
        {content}
        {popupPosition && (
          <span
            role="status"
            className="pointer-events-none absolute z-20 flex -translate-x-1/2 -translate-y-[calc(100%+0.75rem)] items-center gap-1.5 whitespace-nowrap rounded-full bg-stone-900 px-3 py-1.5 text-xs font-semibold text-white shadow-xl motion-safe:animate-[copy-pop_.25s_cubic-bezier(.2,.8,.2,1)_both]"
            style={{ left: popupPosition.x, top: popupPosition.y }}
          >
            <Check className="size-3.5 text-emerald-300" />
            コピーしました
          </span>
        )}
      </button>
    )
  }

  return (
    <a
      href={action.href}
      target="_blank"
      rel="noreferrer"
      className={itemClassName}
      style={animationStyle}
    >
      {content}
    </a>
  )
}
