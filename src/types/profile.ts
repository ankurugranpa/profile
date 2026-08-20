export const socialPlatforms = ['facebook', 'github', 'x', 'gmail'] as const

export type SocialPlatform = (typeof socialPlatforms)[number]

type SocialLinkBase = {
  platform: SocialPlatform
  label: string
  description: string
}

export type SocialLink = SocialLinkBase &
  (
    | { action: { type: 'link'; href: string } }
    | { action: { type: 'copy'; value: string } }
  )

export type Profile = {
  name: string
  penName: string
  initials: string
  imageUrl?: string
  alternateImageUrl?: string
  greeting: string
  description: string
  isAvailable: boolean
  links: readonly SocialLink[]
}
