import { useEffect, useState } from 'react'

import { cn } from '@/lib/utils'

type ProfileAvatarProps = {
  name: string
  penName: string
  initials: string
  imageUrl?: string
  alternateImageUrl?: string
  isAvailable: boolean
  isFlipped: boolean
  onFlip: () => void
}

export function ProfileAvatar({
  name,
  penName,
  initials,
  imageUrl,
  alternateImageUrl,
  isAvailable,
  isFlipped,
  onFlip,
}: ProfileAvatarProps) {
  const [hasImageError, setHasImageError] = useState(false)
  const [hasAlternateImageError, setHasAlternateImageError] = useState(false)

  useEffect(() => {
    setHasImageError(false)
  }, [imageUrl])

  useEffect(() => {
    setHasAlternateImageError(false)
  }, [alternateImageUrl])

  const shouldShowImage = Boolean(imageUrl) && !hasImageError
  const shouldShowAlternateImage =
    Boolean(alternateImageUrl) && !hasAlternateImageError
  const alternateInitial = penName.trim().charAt(0).toUpperCase() || initials.charAt(0)

  return (
    <div className="relative mb-5 size-28 [perspective:900px] motion-safe:animate-[avatar-peek_5s_ease-in-out_infinite] sm:size-32">
      <button
        type="button"
        className="block size-full rounded-[2.25rem] outline-none transition-transform duration-300 hover:-translate-y-1 active:translate-y-0 focus-visible:-translate-y-1 focus-visible:ring-4 focus-visible:ring-emerald-600/30 motion-reduce:transition-none"
        aria-label={isFlipped ? '最初のプロフィール画像を表示' : 'もう一つのプロフィール画像を表示'}
        aria-pressed={isFlipped}
        title={isFlipped ? '元のアイコンに戻す' : 'もう一つのアイコンを表示'}
        onClick={onFlip}
      >
        <span
          className={cn(
            'relative block size-full rounded-[2.25rem] transition-transform duration-700 [transform-style:preserve-3d] motion-reduce:transition-none',
            isFlipped && '[transform:rotateY(180deg)]',
          )}
        >
          <span className="absolute inset-0 overflow-hidden rounded-[2.25rem] border-4 border-white/90 bg-stone-700 text-white shadow-[0_16px_35px_rgba(68,61,50,.18)] [backface-visibility:hidden]">
            {shouldShowImage ? (
              <img
                src={imageUrl}
                alt={`${name}のプロフィール画像`}
                className="size-full bg-white object-contain object-center"
                onError={() => setHasImageError(true)}
              />
            ) : (
              <span className="grid size-full place-items-center text-2xl font-semibold">
                {initials}
              </span>
            )}
          </span>

          <span className="absolute inset-0 overflow-hidden rounded-[2.25rem] border-4 border-white/90 bg-emerald-700 text-white shadow-[0_16px_35px_rgba(68,61,50,.18)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
            {shouldShowAlternateImage ? (
              <img
                src={alternateImageUrl}
                alt={`${penName}のもう一つのプロフィール画像`}
                className="size-full bg-white object-cover object-center"
                onError={() => setHasAlternateImageError(true)}
              />
            ) : (
              <span className="grid size-full place-items-center text-4xl font-bold">
                {alternateInitial}
              </span>
            )}
          </span>
        </span>
      </button>

      {isAvailable && (
        <span
          className="pointer-events-none absolute -right-1 bottom-1 z-10 size-5 rounded-full border-4 border-stone-50 bg-emerald-600"
          title="Available"
        />
      )}
    </div>
  )
}
