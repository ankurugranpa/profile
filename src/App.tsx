import { ProfileCard } from '@/components/profile/profile-card'
import { profile } from '@/data/profile'

export default function App() {
  return (
    <main className="relative grid min-h-svh place-items-center overflow-hidden bg-stone-100 px-4 py-8 text-stone-900 sm:px-6 sm:py-10">
      <div className="pointer-events-none absolute -right-20 -top-28 size-60 rounded-full bg-orange-200/70 blur-sm" />
      <div className="pointer-events-none absolute -bottom-28 -left-24 size-56 rounded-full bg-emerald-200/60 blur-sm" />
      <ProfileCard profile={profile} />
    </main>
  )
}
