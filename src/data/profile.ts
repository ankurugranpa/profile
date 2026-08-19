import type { Profile } from '@/types/profile'

/**
 * ページに表示する内容は、このファイルだけで変更できます。
 */
export const profile = {
  name: '鳥元 湧輝',
  initials: 'YN',
  imageUrl: '/icon.png',
  greeting: 'こんにちは！',
  description: 'お気軽にDMください！！',
  isAvailable: true,
  links: [
    {
      platform: 'facebook',
      label: 'Facebook',
      description: '連絡付きやすいです',
      href: 'https://www.facebook.com/profile.php?id=61592834570936',
    },
    {
      platform: 'gmail',
      label: 'Gmail',
      description: '連絡付きやすいです',
      href: 'ankuru.ahahahaha@gmail.com',
    },
    {
      platform: 'x',
      label: 'X',
      description: '気が付きにくいです',
      href: 'https://x.com/ankuru_dev',
    },
  ],
} as const satisfies Profile
