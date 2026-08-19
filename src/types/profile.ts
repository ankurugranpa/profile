export const socialPlatforms = ['facebook', 'x', 'gmail'] as const

export type SocialPlatform = (typeof socialPlatforms)[number]

export type SocialLink = {
  platform: SocialPlatform
  label: string
  description: string
  href: string
}

export type Profile = {
  name: string
  initials: string
  imageUrl?: string
  greeting: string
  description: string
  isAvailable: boolean
  links: readonly SocialLink[]
}
