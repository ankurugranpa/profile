import type { Profile } from '@/types/profile'

const emailAddress = 'ankuru.ahahahaha@gmail.com'

/**
 * ページに表示する内容は、このファイルだけで変更できます。
 * コピーするメールアドレスはemailAddressを変更してください。
 */
export const profile = {
  name: '鳥元 湧輝',
  penName: 'ankuru',
  initials: 'YN',
  imageUrl: '/my-face.png',
  alternateImageUrl: '/icon.png',
  greeting: 'こんにちは！',
  description: 'お気軽にDMください！！',
  isAvailable: true,
  links: [
    {
      platform: 'facebook',
      label: 'Facebook',
      description: '連絡付きやすいです',
      action: {
        type: 'link',
        href: 'https://www.facebook.com/profile.php?id=61592834570936',
      },
    },
    {
      platform: 'gmail',
      label: 'Gmail',
      description: emailAddress,
      action: { type: 'copy', value: emailAddress },
    },
    {
      platform: 'github',
      label: 'GitHub',
      description: '@ankurugranpa',
      action: { type: 'link', href: 'https://github.com/ankurugranpa' },
    },
    {
      platform: 'x',
      label: 'X',
      description: '気が付きにくいです',
      action: { type: 'link', href: 'https://x.com/ankuru_dev' },
    },
  ],
} as const satisfies Profile
