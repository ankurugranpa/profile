import { useEffect, useState } from 'react'

type ProfileAvatarProps = {
  name: string
  initials: string
  imageUrl?: string
  isAvailable: boolean
}

export function ProfileAvatar({
  name,
  initials,
  imageUrl,
  isAvailable,
}: ProfileAvatarProps) {
  const [hasImageError, setHasImageError] = useState(false)

  useEffect(() => {
    setHasImageError(false)
  }, [imageUrl])

  const shouldShowImage = Boolean(imageUrl) && !hasImageError

  return (
    <div className="relative mb-5 size-28 overflow-visible rounded-[2.25rem] border-4 border-white/90 bg-white text-white shadow-[0_16px_35px_rgba(68,61,50,.18)] sm:size-32">
      {shouldShowImage ? (
        <img
          src={imageUrl}
          alt={`${name}のプロフィール画像`}
          className="size-full rounded-[2rem] bg-white object-contain object-center sm:rounded-[2.25rem]"
          onError={() => setHasImageError(true)}
        />
      ) : (
        <span className="grid size-full place-items-center text-2xl font-semibold tracking-wider">
          {initials}
        </span>
      )}

      {isAvailable && (
        <span
          className="absolute -right-1 bottom-1 size-5 rounded-full border-4 border-stone-50 bg-emerald-600"
          title="Available"
        />
      )}
    </div>
  )
}
