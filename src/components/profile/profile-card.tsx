import { useState } from 'react'

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { SocialLink } from '@/components/profile/social-link'
import { ProfileAvatar } from '@/components/profile/profile-avatar'
import { cn } from '@/lib/utils'
import type { Profile } from '@/types/profile'

type ProfileCardProps = {
  profile: Profile
}

export function ProfileCard({ profile }: ProfileCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <Card
      aria-labelledby="profile-name"
      className="relative z-10 w-full max-w-120 gap-0 border-white/80 bg-white/65 px-6 pb-6 pt-8 shadow-[0_24px_70px_rgba(68,61,50,.13)] backdrop-blur-xl motion-safe:animate-[card-in_.7s_cubic-bezier(.2,.8,.2,1)_both] sm:px-8 sm:pb-7 sm:pt-9"
    >
      <CardHeader>
        <p className="mb-6 flex items-center gap-2 text-[0.6875rem] font-bold tracking-[0.22em] text-stone-500">
          <span className="size-1.5 rounded-full bg-orange-700" />
          MY PROFILE
        </p>

        <ProfileAvatar
          name={profile.name}
          penName={profile.penName}
          initials={profile.initials}
          imageUrl={profile.imageUrl}
          alternateImageUrl={profile.alternateImageUrl}
          isAvailable={profile.isAvailable}
          isFlipped={isFlipped}
          onFlip={() => setIsFlipped((current) => !current)}
        />

        <div className="relative h-24 w-full" aria-live="polite">
          <h1
            id="profile-name"
            className={cn(
              'absolute left-0 top-0 w-full origin-center whitespace-nowrap text-center font-bold leading-tight tracking-normal transition-[transform,font-size] duration-700 ease-[cubic-bezier(.2,.8,.2,1)] motion-reduce:transition-none',
              isFlipped
                ? 'text-2xl [transform:translateY(3.75rem)] sm:text-[1.625rem]'
                : 'text-[2.5rem] [transform:translateY(0)] sm:text-[2.75rem]',
            )}
          >
            {profile.name}
          </h1>
          <p
            className={cn(
              'absolute left-0 top-0 w-full origin-center whitespace-nowrap text-center font-bold leading-tight text-emerald-700 transition-[transform,font-size] duration-700 ease-[cubic-bezier(.2,.8,.2,1)] motion-reduce:transition-none',
              isFlipped
                ? 'text-[2.5rem] [transform:translateY(0)] sm:text-[2.75rem]'
                : 'text-2xl [transform:translateY(3.75rem)] sm:text-[1.625rem]',
            )}
          >
            {profile.penName}
          </p>
        </div>
        <p className="mb-7 mt-3 text-sm leading-7 text-stone-500">
          {profile.greeting}
          <br />
          {profile.description}
        </p>
      </CardHeader>

      <CardContent className="grid gap-3 p-0">
        {profile.links.map((link, index) => (
          <SocialLink key={link.platform} link={link} index={index} />
        ))}
      </CardContent>

      <CardFooter className="mt-7 gap-3 p-0 text-stone-400">
        <span className="h-px w-full bg-stone-900/10" />
        <p className="shrink-0 font-serif text-xs italic">
          Thanks for stopping by.
        </p>
        <span className="h-px w-full bg-stone-900/10" />
      </CardFooter>
    </Card>
  )
}
